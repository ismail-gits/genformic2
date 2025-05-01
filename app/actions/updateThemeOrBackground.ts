"use server"

import { currentUser } from "@clerk/nextjs/server"
import prisma from "@/lib/prisma/prisma"

type UpdateThemeOrBackgroundType = {
  type: "formTheme" | "formBackground",
  value: string
  formId: string
}

export default async function updateThemeOrBackground({type, value, formId}: UpdateThemeOrBackgroundType) {
  const user = await currentUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  try {
    const response = await prisma.forms.update({
      where: {
        id: formId,
        ownerId: user.id
      },
      data: {
        [type]: value
      },
      select: {
        [type]: true
      }
    })

    console.log(response)
  } catch (error) {
    console.log("Error while updating the database:", error)
  }
}