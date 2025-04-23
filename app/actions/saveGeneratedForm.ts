import prisma from "@/lib/prisma/prisma";
import { currentUser } from "@clerk/nextjs/server";

type DbResponseType = {
  id: string
}

export async function saveGeneratedForm(form: string): Promise<DbResponseType> {
  const user = await currentUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  const dbResponse = await prisma.forms.create({
    data: {
      ownerId: user.id,
      jsonForm: JSON.stringify(form)
    },
    select: {
      id: true
    }
  })

  return dbResponse
}