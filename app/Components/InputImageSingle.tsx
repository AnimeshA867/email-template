"use client";

import { SingleImageDropzone } from "./input dnd/SingleImageDropZone";
import { useEdgeStore } from "../lib/edgestore";
import { useState } from "react";
interface type {
  handleProfileChange: (value: any) => void;
}
export function SingleImageDropzoneUsage({ handleProfileChange }: type) {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = useState(0);

  return (
    <div className="flex flex-col items-center gap-2 relative">
      <SingleImageDropzone
        width={50}
        height={50}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />
      {progress != 0 && (
        <span className="w-[48px] h-[48px] border-white  border-t-[4px] rounded-full animation absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 z-10"></span>
      )}
      <button
        className="bg-blue-500 px-5 py-3 rounded-full text-white"
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              options: {
                temporary: true,
              },
              onProgressChange: (progress) => {
                // you can use this to show a progress bar
                setProgress(progress);
                if (progress == 100) {
                  setProgress(0);
                }
              },
            });

            handleProfileChange(res.url);
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
          }
        }}
      >
        Upload
      </button>
    </div>
  );
}
