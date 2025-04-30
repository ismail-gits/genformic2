"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldSchemaType } from "@/lib/zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { formAtom } from "@/app/store/atoms/formAtom";
import updateForm from "@/app/actions/updateForm";
import { useParams } from "next/navigation";

type FieldEditType = {
  field: FieldSchemaType;
};

export default function FieldEdit({ field }: FieldEditType) {
  const params = useParams();
  const [form, setForm] = useAtom(formAtom);
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const updateFields = async (): Promise<void> => {
    if (!form) {
      throw new Error("No form present");
    }

    // Update the specific field in the form
    const updatedFields = form.fields.map((f) => {
      if (f.name === field.name) {
        return {
          ...f,
          label: label || f.label,
          placeholder: placeholder || f.placeholder,
        };
      }

      // If that is not the field then return f
      return f;
    });

    // Update the form atom, with the new fields
    setForm({
      ...form,
      fields: updatedFields,
    });

    // Update the database
    try {
      const formId = params.formId as string;
      await updateForm({
        form: {
          ...form,
          fields: updatedFields
        },
        formId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteField = async (): Promise<void> => {
    if (!form) {
      throw new Error("No form present");
    }

    // Delete the specific field
    const updatedFields = form.fields.filter((f) => f.name !== field.name);

    // Update the form atom, with the new fields
    setForm({
      ...form,
      fields: updatedFields,
    });

    // Update the database
    try {
      const formId = params.formId as string;
      await updateForm({
        form: {
          ...form,
          fields: updatedFields
        },
        formId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Edit className="h-5 w-5 text-gray-500 cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent className="space-y-3">
          <h2 className="font-bold text-xl">Edit Field</h2>
          <div>
            <Label className="text-xs mb-1">Label Name</Label>
            <Input
              type="text"
              defaultValue={field.label}
              onChange={(e) => {
                setLabel(e.target.value);
              }}
            />
          </div>
          <div>
            <Label className="text-xs mb-1">Placeholder Name</Label>
            <Input
              type="text"
              defaultValue={field.placeholder}
              onChange={(e) => {
                setPlaceholder(e.target.value);
              }}
            />
          </div>
          <div className="pt-2 flex">
            <Button size={"sm"} onClick={updateFields}>
              Update
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      <Trash2
        className="h-5 w-5 text-red-500 cursor-pointer"
        onClick={deleteField}
      />
    </div>
  );
}
