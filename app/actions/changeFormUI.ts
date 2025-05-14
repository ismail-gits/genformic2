"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma/prisma";

type ChangeFormUIType = {
  type: "formTheme" | "formBackground" | "formStyle" | "enableSignIn";
  value: string | boolean;
  formId: string;
};

export default async function changeFormUI({
  type,
  value,
  formId,
}: ChangeFormUIType) {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  try {
    const response = await prisma.forms.update({
      where: {
        id: formId,
        ownerId: user.id,
      },
      data: {
        [type]: value,
      },
      select: {
        [type]: true,
      },
    });

    console.log(response);
  } catch (error) {
    console.log("Error while updating the database:", error);
  }
}
