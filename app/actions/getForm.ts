"use server";

import prisma from "@/lib/prisma/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { FormSchemaType } from "@/lib/zod";

type GetFormReturnType = {
  formTheme: string;
  formBackground: string;
  jsonForm: FormSchemaType;
};

export default async function getForm(
  formId: string
): Promise<GetFormReturnType | null> {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  try {
    const response = await prisma.forms.findUnique({
      where: {
        id: formId,
        ownerId: user.id,
      },
      select: {
        jsonForm: true,
        formBackground: true,
        formTheme: true,
      },
    });

    if (!response || !response.jsonForm) {
      throw new Error("Form not found or missing data");
    }

    return {
      formBackground: response.formBackground,
      formTheme: response.formTheme,
      jsonForm: JSON.parse(response.jsonForm) as FormSchemaType,
    };
  } catch (error) {
    console.log("Error fetching form from database:", error);
    return null;
  }
}
