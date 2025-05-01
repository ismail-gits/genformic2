"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Loader } from "lucide-react";
import { usePathname } from "next/navigation";

function Header() {
  const { isSignedIn, isLoaded } = useUser();
  const path = usePathname();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin text-purple-500" />
      </div>
    );
  }

  return (
    !path.includes("/form/live") && (
      <div className="p-5 border shadow-sm">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={"/Genformic-logo.svg"}
              width={150}
              height={50}
              alt="genformic-logo"
              className="transition-all duration-300 hover:scale-110 cursor-pointer"
            />
          </Link>
          {isSignedIn ? (
            <div className="flex items-center gap-5">
              <Link href={"/dashboard"}>
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
    )
  );
}

export default Header;
