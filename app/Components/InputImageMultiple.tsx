"use client";

import {
  MultiFileDropzone,
  type FileState,
} from "./input dnd/MultiImageDropZone";
import { useEdgeStore } from "../lib/edgestore";
import { useState, useEffect } from "react";
interface type {
  handleAward: (value: [string]) => void;
}
export function MultiFileDropzoneUsage({ handleAward }: type) {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();
  const [photos, setPhotos] = useState<[string]>([""]);

  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-semibold text-[20px] my-4 text-center">
        Select Images for Awards
      </h2>
      <MultiFileDropzone
        value={fileStates}
        onChange={(files) => {
          setFileStates(files);
        }}
        onFilesAdded={async (addedFiles) => {
          setFileStates([...fileStates, ...addedFiles]);
          await Promise.all(
            addedFiles.map(async (addedFileState) => {
              try {
                const res = await edgestore.publicFiles.upload({
                  file: addedFileState.file,
                  options: {
                    temporary: true,
                  },
                  onProgressChange: async (progress) => {
                    updateFileProgress(addedFileState.key, progress);
                    if (progress === 100) {
                      // wait 1 second to set it to complete
                      // so that the user can see the progress bar at 100%

                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      updateFileProgress(addedFileState.key, "COMPLETE");
                    }
                  },
                });
                photos.push(res.url);
                handleAward(photos);
              } catch (err) {
                updateFileProgress(addedFileState.key, "ERROR");
              }
            })
          );
        }}
      />
      <button
        className="px-3 py-3 bg-red-600/80 text-white text-[20px] font-semibold mt-4 rounded-lg hover:bg-red-700/80"
        onClick={() => {
          setFileStates([]);
          setPhotos([""]);
        }}
      >
        Clear
      </button>
    </div>
  );
}