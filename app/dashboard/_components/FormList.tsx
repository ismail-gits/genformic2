"use client";

import getAllForms, { GetAllFormsReturnType } from "@/app/actions/getAllForms";
import { useEffect, useState } from "react";
import FormListItem from "./FormListItem";
import FormListResponses from "./FormListResponses";

type FormListType = {
  mode: "forms" | "responses";
};

export default function FormList({ mode }: FormListType) {
  const [forms, setForms] = useState<GetAllFormsReturnType[]>([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await getAllForms();

        if (!response) {
          throw new Error("No forms found");
        }

        setForms(response);
      } catch (error) {
        console.log("Error while fetching all forms: " + error);
      }
    };

    fetchForms();
  }, []);

  return (
    <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 gap-5">
      {forms.map((form: GetAllFormsReturnType, index: number) => (
        <div key={index}>
          {mode === "forms" ? (
            <FormListItem
              form={JSON.parse(form.jsonForm)}
              formId={form.id}
              onDelete={() => {
                setForms((forms) => forms.filter((f) => f.id !== form.id));
              }}
            />
          ) : (
            <FormListResponses
              form={JSON.parse(form.jsonForm)}
              formId={form.id}
            />
          )}
        </div>
      ))}
    </div>
  );
}
