"use client";

import { formBackgroundAtom } from "@/app/store/atoms/formBackgroundAtom";
import FormUi from "../../edit/_components/FormUi";
import { useAtom } from "jotai";
import Link from "next/link";
import Image from "next/image";

export default function LiveForm() {
  const [selectedBackground] = useAtom(formBackgroundAtom);

  return (
    <div
      className="p-10 flex justify-center items-center"
      style={{ backgroundImage: selectedBackground }}
    >
      <FormUi mode="live" />
      <Link href={"/"} target="_blank">
        <div className="flex gap-2 items-center bg-black rounded-2xl px-3 py-1 fixed bottom-5 left-20 hover:scale-105 transition-all duration-200">
          <Image
            src={"/G-Logo.svg"}
            height={24}
            width={24}
            alt="Genformi-Logo"
          />
          <h2 className="font-bold text-modern cursor-pointer">
            Generate Form With AI.
          </h2>
        </div>
      </Link>
    </div>
  );
}
