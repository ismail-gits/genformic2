"use client";

import { formBackgroundAtom } from "@/app/store/atoms/formBackgroundAtom";
import FormUi from "../../edit/_components/FormUi";
import { useAtom } from "jotai";

export default function LiveForm() {
  const [selectedBackground] = useAtom(formBackgroundAtom)

  return (
    <div className="p-10 flex justify-center items-center"
      style={{backgroundImage: selectedBackground}}
    >
      <FormUi mode="live"/>
    </div>
  );
}
