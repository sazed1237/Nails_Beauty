"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
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
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "../ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function AddNewStaffMemberModal() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    phone: "",
    email: "",
    specialties: [] as string[],
  });

  const specialtiesOptions = ["Gel", "Nail Art", "Polish", "Manicure"];

  //  Submit form handler (you can connect API later)
  const handleSubmit = () => {
    console.log("New Staff Member:", formData);
    alert(` Added staff member: ${formData.name}`);
  };

  const roleCategoryOptions = [
    "Senior Nail Technician",
    "Junior Nail Technician",
    "Hair Stylist",
    "Senior Hair Stylist",
    "Massage Therapist",
    "Beauty Therapist",
    "Makeup Artist",
    "Spa Manager",
    "Front Desk Receptionist",
    "Salon Assistant",
    "Esthetician",
    "Brow & Lash Specialist",
    "Pedicurist",
    "Manicurist",
    "Customer Service Executive",
    "Branch Manager",
    "Trainee Technician",
    "Salon Cleaner",
  ];

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="lg">
          <Plus size={18} />
          Add Staff Member
        </Button>
      </AlertDialogTrigger>

      {/*  Modal Content */}
      <AlertDialogContent className="sm:max-w-[540px] rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add New Staff Member</AlertDialogTitle>
          <AlertDialogClose>
            <X />
          </AlertDialogClose>
        </AlertDialogHeader>

        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel aria-required htmlFor="fullname">
                Full Name
              </FieldLabel>
              <Input
                required
                id="fullname"
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter full name"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="staff-role" aria-required>
                Role
              </FieldLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a role for the staff" />
                </SelectTrigger>
                <SelectContent>
                  {roleCategoryOptions.map((item) => (
                    <SelectItem className="" key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel aria-required htmlFor="phone">
                Phone
              </FieldLabel>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="(123) 456-7890"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email" aria-required>
                Email
              </FieldLabel>
              <Input
                required
                id="email"
                autoComplete="off"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@salon.com"
              />
            </Field>

            {/* Multi-Select Specialties Dropdown */}
            <Field>
              <FieldLabel htmlFor="">Specialties</FieldLabel>

              <MultiSelect>
                <MultiSelectTrigger className="w-full">
                  <MultiSelectValue placeholder="Select specialties" />
                </MultiSelectTrigger>
                <MultiSelectContent>
                  <MultiSelectGroup>
                    {specialtiesOptions.map((item) => (
                      <MultiSelectItem
                        className="capitalize justify-between flex-row-reverse"
                        value={item}
                      >
                        {item}
                      </MultiSelectItem>
                    ))}
                  </MultiSelectGroup>
                </MultiSelectContent>
              </MultiSelect>
            </Field>
          </FieldGroup>
        </FieldSet>

        {/*  Footer */}
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>
            Add Staff Member
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
