"use client";

import {
  ChartNoAxesCombined,
  LibraryBig,
  LucideIcon,
  MessageSquareQuote,
  ShieldPlus,
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

  useEffect(() => {
    // console.log(path)
  }, [path]);

  return (
    <div className="h-screen shadow-md border">
      <div className="p-5">
        {menuList.map((menu: MenuListType, index: number) => (
          <h2
            key={index}
            className={`flex items-center gap-3 p-4 mb-2 text-gray-700 hover:bg-modern hover:text-white rounded-lg cursor-pointer ${
              (path === menu.path) && "bg-modern text-white"
            }`}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
}
