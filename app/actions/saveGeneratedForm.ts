"use server";

import prisma from "@/lib/prisma/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { formSchema } from "@/lib/zod";

type DbResponseType = {
  id: string;
};

export async function saveGeneratedForm(
  form: string
): Promise<DbResponseType | null> {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  try {
    const jsonForm = JSON.parse(form);
    const validation = formSchema.safeParse(jsonForm[0]);

    if (!validation.success) {
      console.log("Form validation failed:", validation.error.errors);
      throw new Error("Form validation failed");
    }

    const dbResponse = await prisma.forms.create({
      data: {
        ownerId: user.id,
        jsonForm: JSON.stringify(validation.data),
      },
      select: {
        id: true,
      },
    });

    return dbResponse;
  } catch (error) {
    console.log("Error while saving form to the database", error);
    return null;
  }
}
