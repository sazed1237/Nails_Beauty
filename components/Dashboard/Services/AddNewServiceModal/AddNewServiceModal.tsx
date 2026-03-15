"use client";

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import ImageInput from "../../ui/ImageInput";

export default function AddNewServiceModal() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
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

  //  Submit form (you can later integrate API or add to list)
  const handleSubmit = () => {
    console.log("New Gallery Item:", formData);
    alert(` Added gallery item: ${formData.title}`);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="lg">
          <Plus size={18} />
          Add New Service
        </Button>
      </AlertDialogTrigger>

      {/*  Modal Form */}
      <AlertDialogContent className="sm:max-w-[540px] rounded-2xl">
        <AlertDialogHeader showSeparator>
          <AlertDialogTitle>Add New Service</AlertDialogTitle>
          <AlertDialogClose>
            <X />
          </AlertDialogClose>
        </AlertDialogHeader>

        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel aria-required htmlFor="service-name">
                Service Name
              </FieldLabel>
              <Input
                required
                id="service-name"
                autoComplete="off"
                placeholder="Enter a service name"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Textarea
                id="description"
                autoComplete="off"
                placeholder="Describe the service..."
              />
            </Field>

            <Field>
              <FieldLabel aria-required htmlFor="service-category">
                Category
              </FieldLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose service category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((item) => (
                    <SelectItem className="" key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <div className="flex gap-4">
              <Field>
                <FieldLabel htmlFor="duration">Duration</FieldLabel>
                <Input
                  id="duration"
                  autoComplete="off"
                  placeholder="Enter service duration"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="price">Price</FieldLabel>
                <Input
                  id="price"
                  autoComplete="off"
                  placeholder="Enter price"
                />
              </Field>
            </div>

            <ImageInput />
          </FieldGroup>
        </FieldSet>

        <AlertDialogFooter showSeparator>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
