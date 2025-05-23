import React from "react";
import CreateForm from "./_components/CreateForm";
import FormList from "./_components/FormList";

export default function page() {
  return (
    <div className="p-5 md:p-10">
      <h2 className="font-bold text-3xl flex items-center justify-between">
        Dashboard
        <CreateForm />
      </h2>

      {/* List of forms */}
      <FormList mode="forms" />
    </div>
  );
}
