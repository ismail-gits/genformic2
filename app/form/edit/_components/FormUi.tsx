"use client";

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
import { FieldSchemaType, OptionSchemaType } from "@/lib/zod";
import { Loader } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import FieldEdit from "./FieldEdit";
import { formAtom } from "@/app/store/atoms/formAtom";
import { useParams } from "next/navigation";
import getForm from "@/app/actions/getForm";
import { useAtom, useSetAtom } from "jotai";
import { formThemeAtom } from "@/app/store/atoms/formThemeAtom";
import { formBackgroundAtom } from "@/app/store/atoms/formBackgroundAtom";
import { formStyleAtom } from "@/app/store/atoms/formStyleAtom";
import submitResponse from "@/app/actions/submitResponse";
import { toast } from "sonner";

type FormUiType = {
  mode: "edit" | "live";
};

export default function FormUi({ mode }: FormUiType) {
  const params = useParams();
  const [form, setForm] = useAtom(formAtom);
  const [selectedTheme, setSelectedTheme] = useAtom(formThemeAtom);
  const setSelectedBackground = useSetAtom(formBackgroundAtom);
  const [selectedStyle, setSelectedStyle] = useAtom(formStyleAtom);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [formSubmit, setFormSubmit] = useState(false);
  const formId = params.formId as string;
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const fetchForm = async () => {
      if (params?.formId) {
        try {
          const response = await getForm({
            mode,
            formId,
          });

          if (!response) {
            throw new Error("Form not found");
          }

          // Set the fetched form data in the atom
          setForm(response.jsonForm);
          setSelectedTheme(response.formTheme);
          setSelectedBackground(response.formBackground);
          setSelectedStyle(response.formStyle);
        } catch (error) {
          console.error("Error fetching form:", error);
        }
      }
    };
    fetchForm();
  }, [params?.formId, mode]);

  if (!form) {
    return <Loader className="animate-spin text-purple-600" />;
  }

  const formBorderStyle = {
    [selectedStyle.key === "boxshadow"
      ? "boxShadow"
      : selectedStyle.key === "border"
      ? "border"
      : selectedStyle.key]: selectedStyle.value,
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormSubmit(true);

    const result = await submitResponse({
      formId,
      jsonResponse: JSON.stringify(formData),
    });

    setFormSubmit(false);

    if (result) {
      formRef.current?.reset();
      toast("Response submitted successfully !");
    } else {
      toast("Error while submitting your response !");
    }

    console.log(result);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleFormSubmit}
      className="border p-5 md:w-[600px] rounded-lg"
      data-theme={selectedTheme}
      style={formBorderStyle}
    >
      <h2 className="font-bold text-center text-2xl">{form.title}</h2>
      <h2 className="text-sm text-gray-500 text-center">{form.subheading}</h2>

      {form.fields.map((field: FieldSchemaType, index: number) => (
        <div key={index}>
          <div className="my-5 flex items-center gap-2">
            <div className="w-full">
              {field.type === "select" ? (
                <div>
                  <Label
                    htmlFor={field.name}
                    className="text-sm text-gray-600 pb-1"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </Label>
                  <Select
                    name={field.name}
                    required={field.required}
                    onValueChange={(value) => {
                      setFormData({
                        ...formData,
                        [field.label]: value,
                      });
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={field.placeholder || field.label}
                      />
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
                    <Label
                      htmlFor={field.name}
                      className="text-sm text-gray-600 pb-1"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </Label>
                    {field.options.map(
                      (option: OptionSchemaType, index: number) => (
                        <div
                          className="flex items-center gap-2 pb-1"
                          key={index}
                        >
                          <Checkbox
                            name={field.name}
                            id={`${field.name}-${option.value}`}
                            value={option.value}
                            required={field.required}
                            onCheckedChange={(value) => {
                              setFormData({
                                ...formData,
                                [field.name]: value
                                  ? [
                                      ...(formData[field.name] || []),
                                      option.value,
                                    ]
                                  : (formData[field.name] || []).filter(
                                      (value: string) => value !== option.value
                                    ),
                              });
                            }}
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
                      onCheckedChange={(value) => {
                        setFormData({
                          ...formData,
                          [field.label]: value,
                        });
                      }}
                    />
                    <Label
                      htmlFor={field.name}
                      className="text-sm text-gray-600"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </Label>
                  </div>
                )
              ) : field.type === "radio" ? (
                <div>
                  <Label
                    htmlFor={field.name}
                    className="text-sm text-gray-600 pb-1"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </Label>
                  <RadioGroup
                    required={field.required}
                    onValueChange={(value) => {
                      setFormData({
                        ...formData,
                        [field.label]: value,
                      });
                    }}
                  >
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
                  <Label
                    htmlFor={field.name}
                    className="text-sm text-gray-600 pb-1"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </Label>
                  <Textarea
                    id={field.name}
                    placeholder={field.placeholder}
                    name={field.name}
                    required={field.required}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [field.label]: e.target.value,
                      });
                    }}
                  />
                </div>
              ) : (
                <div>
                  <Label
                    htmlFor={field.name}
                    className="text-sm text-gray-600 pb-1"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </Label>
                  <Input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    required={field.required}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setFormData({
                        ...formData,
                        [name]: value,
                      });
                    }}
                  />
                </div>
              )}
            </div>
            <div>{mode === "edit" && <FieldEdit field={field} />}</div>
          </div>
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        {formSubmit ? <Loader className="animate-spin" /> : "Submit"}
      </button>
    </form>
  );
}
