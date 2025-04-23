import prisma from "@/lib/prisma/prisma";
import { currentUser } from "@clerk/nextjs/server";

type FieldOption = {
  label: string;
  value: string;
};

type Field = {
  name: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "url"
    | "select"
    | "textarea"
    | "number"
    | "password"
    | "checkbox"
    | "radio"
    | "date"
    | "file"
    | "range"
    | "color"
    | "datetime-local"
    | "month"
    | "week";
  label: string;
  placeholder: string;
  options?: FieldOption[];
};

type GetFormType = {
  title: string;
  subheading: string;
  fields: Field[];
};

export default async function getForm(
  formId: string
): Promise<GetFormType | null> {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  try {
    const response = await prisma.forms.findUnique({
      where: {
        id: formId,
      },
      select: {
        jsonForm: true,
      },
    });

    if (!response || !response.jsonForm) {
      throw new Error("Form not found or missing data");
    }

    const form = response.jsonForm as GetFormType

    return form
  } catch (error) {
    console.log("Error fetching form from database:", error)
    return null
  }
}
