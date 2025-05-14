"use client";

import { ArrowLeft, Loader, Share2, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormUi from "../_components/FormUi";
import Controller from "../_components/Controller";
import { useUser } from "@clerk/nextjs";
import { useAtom } from "jotai";
import { formBackgroundAtom } from "@/app/store/atoms/formBackgroundAtom";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { RWebShare } from "react-web-share";
import { formAtom } from "@/app/store/atoms/formAtom";

export default function EditForm() {
  const { isLoaded } = useUser();
  const [selectedBackground] = useAtom(formBackgroundAtom);
  const [form] = useAtom(formAtom);
  const param = useParams();
  const router = useRouter();

  if (!isLoaded && !form) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin text-purple-500" />
      </div>
    );
  }

  const handleShareClick = async () => {
    await navigator.share({
      title: form?.title,
      text: `${form?.subheading}, Build your form with AI using Genformic in seconds.`,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/form/live/${param.formId}`,
    });
  };

  return (
    <div className="px-6 h-screen">
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-2 my-6 hover:font-bold hover:text-lg transition-all duration-200">
          <Button
            variant={"outline"}
            className="rounded-4xl hover:scale-105"
            onClick={() => {
              router.back();
            }}
          >
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
            onClick={handleShareClick}
            variant={"outline"}
            size={"sm"}
            className="rounded-4xl hover:scale-105 transition-all duration-200 text-green-500 hover:text-green-600"
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
          <FormUi mode="edit" />
        </div>
      </div>
    </div>
  );
}
