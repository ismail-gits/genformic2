"use client";

import getForm from "@/app/actions/getForm";
import React, { useEffect, useState } from "react";
import { FormSchemaType } from "@/lib/zod";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormUi from "../_components/FormUi";

export default function EditForm() {
  const params = useParams();
  const [form, setForm] = useState<FormSchemaType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const fetchForm = async (): Promise<void> => {
    try {
      if (params?.formId) {
        setIsLoading(true);
        const currentForm = await getForm(params.formId as string);
        setForm(currentForm);
      }
    } catch (error) {
      console.log("Error while fetching form");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchForm();
  }, [params.formId]);

  return (
    <div className="px-6 ">
      <h2 className="flex items-center gap-2 my-6 hover:font-bold hover:text-lg transition">
        <Button variant={"outline"} className="rounded-4xl hover:scale-105">
          <ArrowLeft className="text-purple-600"/> Back
        </Button>
      </h2>
      <div className="grid grid-col-1 md:grid-cols-3 gap-5">
        <div className="p-5 border rounded-lg shadow">Controller</div>
        <div className="md:col-span-2 border rounded-lg p-10 min-h-screen flex items-center justify-center"><FormUi form={form}/></div>
      </div>
    </div>
  );
}

// Edit Form
//       <br />
// {isLoading ? <Loader className="animate-spin text-purple-600"/> : JSON.stringify(form)}
