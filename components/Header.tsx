import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Header() {
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
        <Button variant={"default"}>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
