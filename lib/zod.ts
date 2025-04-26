import { z } from "zod";

const optionsSchema = z.object({
  label: z.string(),
  value: z.string(),
});
export type OptionSchemaType = z.infer<typeof optionsSchema>;

const fieldSchema = z.object({
  name: z.string(),
  type: z.enum([
    "text",
    "email",
    "tel",
    "url",
    "select",
    "textarea",
    "number",
    "password",
    "checkbox",
    "radio",
    "date",
    "file",
    "range",
    "color",
    "datetime-local",
    "month",
    "week",
  ]),
  label: z.string(),
  placeholder: z.string(),
  required: z.boolean(),
  options: z.array(optionsSchema).optional(),
});
export type FieldSchemaType = z.infer<typeof fieldSchema>;

export const formSchema = z.object({
  title: z.string(),
  subheading: z.string(),
  fields: z.array(fieldSchema),
});
export type FormSchemaType = z.infer<typeof formSchema>;
