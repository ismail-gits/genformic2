"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma/prisma";

export type GetAllFormsReturnType = {
  id: string;
  ownerId: string;
  jsonForm: string;
};

export default async function getAllForms(): Promise<
  GetAllFormsReturnType[] | null
> {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  try {
    const result = await prisma.forms.findMany({
      where: {
        ownerId: user.id,
      },
      select: {
        id: true,
        ownerId: true,
        jsonForm: true,
      },
    });

    return result;
  } catch (error) {
    console.log("Error while fetching all forms: " + error);
    return null;
  }
}
