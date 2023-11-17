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

  return (
    <div className="flex flex-col items-center gap-2">
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />
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
                console.log(progress);
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
