import { FormSchemaType } from "@/lib/zod";
import { atom } from "jotai";

export const formAtom = atom<FormSchemaType | null>(null)