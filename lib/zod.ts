import { z } from "zod";

export const formSchema = z.object({
  title: z.string(),
  subheading: z.string(),
  fields: z.array(
    z.object({
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
      options: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
          })
        )
        .optional(),
    })
  ),
});
