"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import ImageInput from "../Dashboard/ui/ImageInput";
export default function AddGalleryButton() {
  const [formData, setFormData] = useState({
    name: "",
    categories: [] as string[],
    image: null as File | null,
  });

  const categoryOptions = [
    "Manicures",
    "Pedicures",
    "Gel Nails",
    "Nail Extensions",
    "Nail Art & Design",
  ];

  // Handle image upload
  const handleFileChange = (file: File | null) => {
    if (file && !["image/jpeg", "image/png"].includes(file.type)) {
      alert("Please upload a valid JPG or PNG file.");
      return;
    }
    setFormData({ ...formData, image: file });
  };

  // Submit handler (placeholder for API integration)
  const handleSubmit = () => {
    console.log("New Gallery Item:", formData);
    alert(`Uploaded: ${formData.name}`);
  };

  return (
    <AlertDialog>
      {/* Trigger Button */}
      <AlertDialogTrigger asChild>
        <Button size="lg">
          <Plus size={18} />
          Add Gallery
        </Button>
      </AlertDialogTrigger>

      {/* Modal Content */}
      <AlertDialogContent className="sm:max-w-[420px] rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Gallery</AlertDialogTitle>
          <AlertDialogClose>
            <X />
          </AlertDialogClose>
        </AlertDialogHeader>

        {/* Form */}
        <FieldSet>
          <FieldGroup>
            {/* Full Name */}
            <Field>
              <FieldLabel htmlFor="fullname" aria-required>
                Full Name
              </FieldLabel>
              <Input
                id="fullname"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter Full Name"
                autoComplete="off"
              />
            </Field>

            {/* Categories Multi-Select */}
            <Field>
              <FieldLabel htmlFor="category" aria-required>
                Categories
              </FieldLabel>
              <MultiSelect
                values={formData.categories}
                onValuesChange={(values) =>
                  setFormData({ ...formData, categories: values })
                }
              >
                <MultiSelectTrigger className="w-full">
                  <MultiSelectValue placeholder="Select categories" />
                </MultiSelectTrigger>
                <MultiSelectContent>
                  <MultiSelectGroup>
                    {categoryOptions.map((category) => (
                      <MultiSelectItem
                        key={category}
                        value={category}
                        className="capitalize justify-between flex-row-reverse"
                      >
                        {category}
                      </MultiSelectItem>
                    ))}
                  </MultiSelectGroup>
                </MultiSelectContent>
              </MultiSelect>
            </Field>

            {/* Photo Upload */}
           <ImageInput />
          </FieldGroup>
        </FieldSet>

        {/* Footer Buttons */}
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit}
            className="bg-[#228573] hover:bg-[#1d6d61] text-white"
          >
            Upload Images
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
