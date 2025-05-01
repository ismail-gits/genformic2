"use client";

import { ArrowLeft, Loader, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormUi from "../_components/FormUi";
import Controller from "../_components/Controller";
import { useUser } from "@clerk/nextjs";
import { useAtom } from "jotai";
import { formBackgroundAtom } from "@/app/store/atoms/formBackgroundAtom";

export default function EditForm() {
  const { isSignedIn, isLoaded } = useUser();
  const [selectedBackground] = useAtom(formBackgroundAtom);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin text-purple-500" />
      </div>
    );
  }

  if (!isSignedIn) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="px-6 h-screen">
      <h2 className="flex items-center gap-2 my-6 hover:font-bold hover:text-lg transition">
        <Button variant={"outline"} className="rounded-4xl hover:scale-105">
          <ArrowLeft className="text-purple-600" /> Back
        </Button>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        <div className="p-5 border rounded-lg shadow sticky top-5">
          <Controller />
        </div>
        <div
          className="md:col-span-2 border rounded-lg p-10 min-h-screen flex items-center justify-center"
          style={{ backgroundImage: selectedBackground }}
        >
          <FormUi />
        </div>
      </div>
    </div>
  );
}
