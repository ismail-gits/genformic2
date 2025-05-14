"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma/prisma";

type ExportResponsesType = {
  formId: string;
};

export type ExportResponsesReturnType = {
  id: string,
  formId: string,
  jsonResponse: string,
  createdAt: Date,
  createdBy: string,
}

export default async function exportResponses({ formId }: ExportResponsesType): Promise<ExportResponsesReturnType[] | null> {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized!");
  }

  try {
    const result = await prisma.forms.findFirst({
      where: {
        id: formId,
      },
      select: {
        responses: true
      }
    });

    if (!result) {
      throw new Error("No responses from database")
    }

    return result.responses
  } catch (error) {
    console.log("Error while exporting responses: " + error);
    return null
  }
}
