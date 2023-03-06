import React, { useRef, useCallback } from "react";
import { PlusCircle } from "../icons/PlusCircle";

type InputImageProps = {
  selectedImage: File | undefined;
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
      const file = e.target?.files ? e.target?.files[0] : null;
      if (file) setSelectedImage(file);
    },
    [setSelectedImage]
  );

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
            src={URL.createObjectURL(selectedImage)}
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
