import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ImageInput() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    categories: [] as string[],
    image: null as File | null,
  });

  const handleFileChange = (file: File | null) => {
    if (file && !["image/jpeg", "image/png"].includes(file.type)) {
      alert("Please upload a valid JPG or PNG file.");
      return;
    }
    setFormData({ ...formData, image: file });
  };

  return (
    <Field>
      <FieldLabel htmlFor="fileInput">
        Photo <span className="text-xs">(JPG / PNG)</span>
      </FieldLabel>

      <div
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dotted border-input rounded-lg
        cursor-pointer hover:border-primary/40 transition-colors group"
        onClick={() => document.getElementById("fileInput")?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0];
          handleFileChange(file || null);
        }}
      >
        {formData.image ? (
          <div className="flex flex-col items-center justify-center">
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-md shadow-sm border border-gray-200"
            />
            <p className="text-xs text-gray-500 mt-1 truncate w-32 text-center">
              {formData.image.name}
            </p>
          </div>
        ) : (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#A5A5AB] group-hover:text-primary"
            >
              <path
                d="M8.46997 6.53002C8.17697 6.23702 8.17697 5.76199 8.46997 5.46899L11.47 2.46899C11.539 2.39999 11.6221 2.345 11.7141 2.307C11.8971 2.231 12.1041 2.231 12.2871 2.307C12.3791 2.345 12.462 2.39999 12.531 2.46899L15.531 5.46899C15.824 5.76199 15.824 6.23702 15.531 6.53002C15.385 6.67602 15.193 6.74999 15.001 6.74999C14.809 6.74999 14.6169 6.67702 14.4709 6.53002L12.751 4.80999V16C12.751 16.414 12.415 16.75 12.001 16.75C11.587 16.75 11.251 16.414 11.251 16V4.81097L9.53101 6.531C9.23701 6.823 8.76297 6.82302 8.46997 6.53002ZM18 9.24999C17.586 9.24999 17.25 9.58599 17.25 9.99999C17.25 10.414 17.586 10.75 18 10.75C19.577 10.75 20.25 11.423 20.25 13V18C20.25 19.577 19.577 20.25 18 20.25H6C4.423 20.25 3.75 19.577 3.75 18V13C3.75 11.423 4.423 10.75 6 10.75C6.414 10.75 6.75 10.414 6.75 9.99999C6.75 9.58599 6.414 9.24999 6 9.24999C3.582 9.24999 2.25 10.582 2.25 13V18C2.25 20.418 3.582 21.75 6 21.75H18C20.418 21.75 21.75 20.418 21.75 18V13C21.75 10.582 20.418 9.24999 18 9.24999Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-sm text-[#A5A5AB] group-hover:text-primary mt-2">
              Drag or Click to Upload
            </p>
          </>
        )}
      </div>

      <Input
        id="fileInput"
        type="file"
        accept="image/jpeg,image/png"
        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
        className="hidden"
      />
    </Field>
  );
}
