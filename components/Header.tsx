"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 border shadow-sm">
      <div className="flex items-center justify-between">
        <Image
          src={"/Genformic-logo.svg"}
          width={150}
          height={50}
          alt="genformic-logo"
          className="duration-300 hover:scale-120 cursor-pointer"
        />
        {isSignedIn ? (
          <div className="flex items-center gap-5">
            <Button variant={"outline"}>Dashboard</Button>
            <UserButton />
          </div>
        ) : (
          <Button>Get Started</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
