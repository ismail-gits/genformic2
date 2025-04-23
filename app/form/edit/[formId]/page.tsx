"use client";

import getForm from "@/app/actions/getForm";
import React, { useEffect, useState } from "react";
import { formSchemaType } from "@/lib/zod";
import { useParams } from "next/navigation";

export default function EditForm() {
  const params = useParams()
  const [form, setForm] = useState<formSchemaType | null>(null);

  const fetchForm = async () => {
    try {
      if (params?.formId) {
        const currentForm = await getForm(params.formId as string);
        setForm(currentForm);
      }
    } catch (error) {
      console.log("Error while fetching form")
    }
  };

  useEffect(() => {
    fetchForm()
  }, [params.formId])

  return (
    <div>
      Edit Form
      <br />
      {JSON.stringify(form)}
    </div>
  );
}
