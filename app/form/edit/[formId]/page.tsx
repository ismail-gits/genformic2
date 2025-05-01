"use client";

import { ArrowLeft, Loader, Share2, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormUi from "../_components/FormUi";
import Controller from "../_components/Controller";
import { useUser } from "@clerk/nextjs";
import { useAtom } from "jotai";
import { formBackgroundAtom } from "@/app/store/atoms/formBackgroundAtom";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function EditForm() {
  const { isSignedIn, isLoaded } = useUser();
  const [selectedBackground] = useAtom(formBackgroundAtom);
  const param = useParams();

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
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-2 my-6 hover:font-bold hover:text-lg transition-all duration-200">
          <Button variant={"outline"} className="rounded-4xl hover:scale-105">
            <ArrowLeft className="text-purple-600" /> Back
          </Button>
        </h2>
        <div className="flex gap-4">
          <Link href={`/form/live/${param.formId}`} target="_blank">
            <Button
              variant={"outline"}
              className="flex gap-2 items-center justify-center rounded-4xl hover:scale-105 transition-all duration-200 text-modern"
            >
              <SquareArrowOutUpRight className="text-purple-500 hover:text-purple-600" />
              View Live
            </Button>
          </Link>
          <Button
            variant={"outline"}
            className="flex gap-2 items-center justify-center rounded-4xl hover:scale-105 transition-all duration-200 text-green-500 hover:text-green-600"
          >
            <Share2 className="text-green-500 hover:text-green-600" />
            Share
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        <div className="p-5 border rounded-lg shadow sticky top-5">
          <Controller />
        </div>
        <div
          className="md:col-span-2 border rounded-lg p-10 min-h-screen flex items-center justify-center"
          style={{ backgroundImage: selectedBackground }}
        >
          <FormUi mode="edit"/>
        </div>
      </div>
    </div>
  );
}
