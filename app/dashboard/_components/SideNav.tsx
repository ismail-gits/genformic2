import {
  ChartNoAxesCombined,
  LibraryBig,
  LucideIcon,
  MessageSquareQuote,
  ShieldPlus,
} from "lucide-react";
import React from "react";

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
    path: "/forms",
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
  return (
    <div className="h-screen shadow-md border">
      <div className="p-3.5">
        {menuList.map((menu: MenuListType, index: number) => (
          <h2 key={index} className="flex items-center gap-3 p-3">
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
}
