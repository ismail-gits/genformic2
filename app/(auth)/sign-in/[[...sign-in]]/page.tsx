import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="hidden lg:flex md:col-span-1 justify-center items-center h-full pb-20">
          <Image
            src={"/authentication-image.svg"}
            width={500}
            height={100}
            alt="Authentication Image"
          />
        </div>
        <div className="col-span-1">
          <div className="flex justify-center items-center h-full pb-20 hover:scale-105 duration-300">
            <SignIn />
          </div>
        </div>
      </div>
    </section>
  );
}
