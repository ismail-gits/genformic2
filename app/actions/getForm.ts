"use server";

import prisma from "@/lib/prisma/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { FormSchemaType } from "@/lib/zod";
import { StylesType } from "../_data/Styles";

type GetFormType = {
  mode: "edit" | "live";
  formId: string;
};

type GetFormReturnType = {
  formTheme: string;
  formBackground: string;
  formStyle: StylesType;
  jsonForm: FormSchemaType;
  enableSignIn: boolean;
};

export default async function getForm({
  mode,
  formId,
}: GetFormType): Promise<GetFormReturnType | null> {
  let ownerId: string | undefined;

  if (mode === "edit") {
    const user = await currentUser();

    if (!user) {
      throw new Error("Unauthorized");
    }

    ownerId = user.id;
  }

  try {
    const response = await prisma.forms.findUnique({
      where: {
        id: formId,
        ...(ownerId ? { ownerId } : {}),
      },
      select: {
        jsonForm: true,
        formBackground: true,
        formStyle: true,
        formTheme: true,
        enableSignIn: true,
      },
    });

    if (!response || !response.jsonForm) {
      throw new Error("Form not found or missing data");
    }

    return {
      formBackground: response.formBackground,
      formTheme: response.formTheme,
      formStyle: JSON.parse(response.formStyle) as StylesType,
      jsonForm: JSON.parse(response.jsonForm) as FormSchemaType,
      enableSignIn: response.enableSignIn
    };
  } catch (error) {
    console.log("Error fetching form from database:", error);
    return null;
  }
}
