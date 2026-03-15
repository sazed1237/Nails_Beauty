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
export default function AddBlogButton() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    categories: [] as string[],
    image: null as File | null,
  });

  const categoryOptions = [
    "Manicure",
    "Pedicure",
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

  // Submit handler
  const handleSubmit = () => {
    if (!formData.author.trim()) {
      alert("Author Name is required.");
      return;
    }
    if (!formData.title.trim()) {
      alert("Blog Title is required.");
      return;
    }

    console.log("Blog Data:", formData);
    alert(`Blog "${formData.title}" added successfully!`);
  };

  return (
    <AlertDialog>
      {/* Trigger Button */}
      <AlertDialogTrigger asChild>
        <Button size="lg" className="bg-[#008060] hover:bg-[#006b52] text-white">
          <Plus size={18} />
          Add Blog
        </Button>
      </AlertDialogTrigger>

      {/* Modal */}
      <AlertDialogContent className="sm:max-w-[500px] rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Blog</AlertDialogTitle>
          <AlertDialogClose>
            <X />
          </AlertDialogClose>
        </AlertDialogHeader>

        {/* Form */}
        <FieldSet>
          <FieldGroup>
            {/* Author Name */}
            <Field>
              <FieldLabel htmlFor="author">
                Author Name <span className="text-red-500">*</span>
              </FieldLabel>
              <Input
                id="author"
                required
                placeholder="Enter author name"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                autoComplete="off"
              />
            </Field>

            {/* Blog Title */}
            <Field>
              <FieldLabel htmlFor="title">
                Blog Title <span className="text-red-500">*</span>
              </FieldLabel>
              <Input
                id="title"
                required
                placeholder="Enter blog title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                autoComplete="off"
              />
            </Field>

            {/* Short Description */}
            <Field>
              <FieldLabel htmlFor="description">Short Description</FieldLabel>
              <textarea
                id="description"
                placeholder="Write a short summary..."
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#008060]/30"
              />
            </Field>

            {/* Multi-Select Categories */}
            <Field>
              <FieldLabel htmlFor="categories">Categories</FieldLabel>
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

        {/* Footer */}
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit}
            className="bg-[#008060] hover:bg-[#006b52] text-white"
          >
            Upload Images
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
