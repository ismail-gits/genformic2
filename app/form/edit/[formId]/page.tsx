"use client";

import getForm from "@/app/actions/getForm";
import { useParams } from "next/navigation";
import React from "react";

type EditFormType = {
  params: {
    formId: string;
  };
};

export default function EditForm({ params }: EditFormType) {
  // const fetchForm = async () => {
  //   const form = await getForm(params.formId);
  //   return form

  //   console.log(form)
  // };

  return (
    <div>
      Edit Form
    </div>
  );
}
