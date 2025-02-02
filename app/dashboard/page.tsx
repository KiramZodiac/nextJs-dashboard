/** @format */

import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
function page() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className=" w-full flex-none md:w-64">
        <SideNav />
      </div>
    </div>
  );
}

export default page;
