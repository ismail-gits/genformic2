"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChartNoAxesCombined,
  LibraryBig,
  LucideIcon,
  MessageSquareQuote,
  ShieldPlus,
  Sparkles,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

type MenuListType = {
  id: number;
  name: string;
  icon: LucideIcon;
  path: string;
};

const menuList: MenuListType[] = [
  {
    id: 1,
    name: "My Forms",
    icon: LibraryBig,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Responses",
    icon: MessageSquareQuote,
    path: "/responses",
  },
  {
    id: 3,
    name: "Analytics",
    icon: ChartNoAxesCombined,
    path: "/analytics",
  },
  {
    id: 4,
    name: "Upgrade",
    icon: ShieldPlus,
    path: "/upgrade",
  },
];

export default function SideNav() {
  const path = usePathname();

  return (
    <div className="h-screen shadow-md border">
      <div className="p-5">
        {menuList.map((menu: MenuListType, index: number) => (
          <h2
            key={index}
            className={`flex items-center gap-3 p-4 mb-2 text-gray-700 hover:bg-modern hover:text-white rounded-lg cursor-pointer ${
              path === menu.path && "bg-modern text-white scale-105"
            }`}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="fixed bottom-6 p-6 w-64">
        <Button className="w-full">
          <Sparkles className="w-4 h-4" /> Generate Form
        </Button>
        <div className="my-7">
          <Progress value={33} />
          <h2 className="mt-2 text-gray-600">
            <strong>2</strong> out of <strong>3</strong> Credits Used
          </h2>
          <h2 className="mt-3 text-center bg-gradient-to-r from-purple-200 to-blue-200 hover:from-blue-200 hover:to-purple-200 px-2 py-1 text-gray-600 rounded-md">Upgrade to generate more</h2>
        </div>
      </div>
    </div>
  );
}
