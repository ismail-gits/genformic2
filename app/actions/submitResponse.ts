"use server"

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma/prisma";

type SubmitResponseType = {
  formId: string;
  jsonResponse: string;
};

type SubmitResponseReturnType = {
  id: string,
  formId: string
}

export default async function submitResponse({formId, jsonResponse}: SubmitResponseType): Promise<SubmitResponseReturnType> {
  const user = await currentUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  const result = await prisma.userReponses.create({
    data: {
      formId,
      jsonResponse
    },
    select: {
      id: true,
      formId: true
    }
  })

  return result
}
