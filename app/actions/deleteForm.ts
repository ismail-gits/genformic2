"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma/prisma";

type DeleteFormType = {
  formId: string;
};

type DeleteFormReturnType = {
  id: string;
  ownerId: string;
};

export default async function deleteForm({
  formId,
}: DeleteFormType): Promise<DeleteFormReturnType | null> {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  try {
    const response = await prisma.forms.delete({
      where: {
        id: formId,
      },
      select: {
        id: true,
        ownerId: true,
      },
    });

    return response;
  } catch (error) {
    console.log("Error while deleting form: " + error);
    return null;
  }
}
