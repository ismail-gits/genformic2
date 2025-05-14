import React from "react";
import FormList from "../_components/FormList";

export default function Responses() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl flex items-center justify-between">
        Responses
      </h2>
      <FormList mode="responses"/>
    </div>
  );
}
