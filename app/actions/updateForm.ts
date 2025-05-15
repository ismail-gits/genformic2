"use server";

import prisma from "@/lib/prisma/prisma";
import { FormSchemaType } from "@/lib/zod";
import { currentUser } from "@clerk/nextjs/server";

type UpdateFormType = {
  form: FormSchemaType | undefined;
  formId: string;
};

export default async function updateForm({
  form,
  formId,
}: UpdateFormType): Promise<void> {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  try {
    const resposne = await prisma.forms.update({
      where: {
        id: formId,
        ownerId: user.id,
      },
      data: {
        jsonForm: JSON.stringify(form),
      },
      select: {
        jsonForm: true,
      },
    });

    console.log(resposne);
  } catch (error) {
    console.log("Error while updating the database:", error);
  }
}
