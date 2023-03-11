import React, { useRef, useCallback } from "react";
import { PlusCircle } from "../icons/PlusCircle";

type InputImageProps = {
  selectedImage: string | undefined;
  setSelectedImage: (file: File) => any;
};

export const InputImage = ({
  selectedImage,
  setSelectedImage,
}: InputImageProps) => {
  /* ---------------------------------- Refs ---------------------------------- */
  const inputContainerRef = useRef<HTMLInputElement>(null);
  /* -------------------------------- Callbacks ------------------------------- */
  const inputClick = useCallback(() => {
    inputContainerRef.current?.click();
  }, [inputContainerRef]);
  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("fileChange:");
      const file = e.target?.files ? e.target?.files[0] : null;
      if (file) setSelectedImage(file);
    },
    [setSelectedImage]
  );

  console.log("image: ", selectedImage);

  return (
    <div className="flex flex-col items-center">
      <input
        onChange={onFileChange}
        ref={inputContainerRef}
        className="hidden"
        type="file"
      />
      <div
        onClick={inputClick}
        className={`h-40 w-24 rounded-3xl bg-gray-200 ${
          !selectedImage ? "border border-dashed border-gray-400" : ""
        }`}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            className="h-40 w-24 rounded-3xl object-cover"
            alt="stepImage"
          />
        )}
      </div>
      <PlusCircle
        onClick={inputClick}
        className="-m-4 rounded-full shadow-lg shadow-gray-500"
      />
    </div>
  );
};
