"use server"

import prisma from "@/lib/prisma/prisma"
import { currentUser } from "@clerk/nextjs/server"

export default async function UpdateForm() {
  const user = await currentUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  // try {
  //   console.log("hello")
  // }

}