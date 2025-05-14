import React from "react";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="hidden md:block md:w-64 fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
}
