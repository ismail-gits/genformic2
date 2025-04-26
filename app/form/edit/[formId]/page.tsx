"use client";

import getForm from "@/app/actions/getForm";
import React, { useEffect, useState } from "react";
import { formSchemaType } from "@/lib/zod";
import { useParams } from "next/navigation";
import { Loader } from "lucide-react";

export default function EditForm() {
  const params = useParams();
  const [form, setForm] = useState<formSchemaType | null>();
  const [isLoading, setIsLoading] = useState(false)

  const fetchForm = async (): Promise<void> => {
    try {
      if (params?.formId) {
        setIsLoading(true)
        const currentForm = await getForm(params.formId as string);
        setForm(currentForm);
      }
    } catch (error) {
      console.log("Error while fetching form");
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchForm();
  }, [params.formId]);

  return (
    <div>
      Edit Form
      <br />
      {isLoading ? <Loader className="animate-spin text-purple-600"/> : JSON.stringify(form)}
    </div>
  );
}
