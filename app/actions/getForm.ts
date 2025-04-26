"use server";

import prisma from "@/lib/prisma/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { FormSchemaType } from "@/lib/zod";

export default async function getForm(
  formId: string
): Promise<FormSchemaType | null> {
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
      },
    });

    if (!response || !response.jsonForm) {
      throw new Error("Form not found or missing data");
    }

    const form = JSON.parse(response.jsonForm) as FormSchemaType;

    return form;
  } catch (error) {
    console.log("Error fetching form from database:", error);
    return null;
  }
}
