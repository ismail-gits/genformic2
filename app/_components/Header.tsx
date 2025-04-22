"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { isSignedIn } = useUser();

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
            <Link href={'/dashboard'}>
              <Button variant={"outline"}>Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton>
            <Button>Get Started</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default Header;
