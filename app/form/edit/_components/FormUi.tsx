import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FieldSchemaType, FormSchemaType, OptionSchemaType } from "@/lib/zod";
import { Loader } from "lucide-react";
import React from "react";

type FormUiType = {
  form: FormSchemaType | null;
};

export default function FormUi({ form }: FormUiType) {
  if (!form) {
    return (
      <div>
        <Loader className="animate-spin text-purple-600" />
      </div>
    );
  }

  return (
    <div className="border p-5 md:w-[600px] overflow-y-auto rounded-md">
      <h2 className="font-bold text-center text-2xl">{form.title}</h2>
      <h2 className="text-sm text-gray-500 text-center">{form.subheading}</h2>

      {form.fields.map((field: FieldSchemaType, index: number) => (
        <div key={index}>
          <div className="my-3">
            {field.type === "select" ? (
              <div>
                <Label htmlFor={field.name} className="text-sm text-gray-600">
                  {field.label}
                </Label>
                <Select name={field.name} required={field.required}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={field.label} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map(
                      (option: OptionSchemaType, index: number) => (
                        <SelectItem key={index} value={option.value}>
                          {option.label}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
            ) : field.type === "checkbox" ? (
              field.options ? (
                <div>
                  <Label htmlFor={field.name} className="text-sm text-gray-600">
                    {field.label}
                  </Label>
                  {field.options.map(
                    (option: OptionSchemaType, index: number) => (
                      <div className="flex items-center gap-2" key={index}>
                        <Checkbox
                          name={field.name}
                          id={`${field.name}-${option.value}`}
                          value={option.value}
                          required={field.required}
                        />
                        <Label
                          htmlFor={`${field.name}-${option.value}`}
                          className="text-sm text-gray-600"
                        >
                          {option.label}
                        </Label>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={field.name}
                    name={field.name}
                    required={field.required}
                  />
                  <Label htmlFor={field.name} className="text-sm text-gray-600">
                    {field.label}
                  </Label>
                </div>
              )
            ) : field.type === "radio" ? (
              <div>
                <Label htmlFor={field.name} className="text-sm text-gray-600">
                  {field.label}
                </Label>
                <RadioGroup required={field.required}>
                  {field.options?.map(
                    (option: OptionSchemaType, index: number) => (
                      <div className="flex items-center gap-2" key={index}>
                        <RadioGroupItem
                          id={`${field.name}-${option.value}`}
                          value={option.value}
                        />
                        <Label
                          htmlFor={`${field.name}-${option.value}`}
                          className="text-sm text-gray-600"
                        >
                          {option.label}
                        </Label>
                      </div>
                    )
                  )}
                </RadioGroup>
              </div>
            ) : field.type === "textarea" ? (
              <div>
                <Label htmlFor={field.name} className="text-sm text-gray-600">
                  {field.label}
                </Label>
                <Textarea
                  id={field.name}
                  placeholder={field.placeholder}
                  name={field.name}
                  required={field.required}
                />
              </div>
            ) : (
              <div>
                <Label htmlFor={field.name} className="text-sm text-gray-600">
                  {field.label}
                </Label>
                <Input
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  required={field.required}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
