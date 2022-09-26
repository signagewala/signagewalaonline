import React from "react";
import Navbar from "../elements/Navbar";
import Sidebar from "../elements/Sidebar";

export default function User({ children }) {
  const design = {
    bgcolor: "bg-slate-900",
    textcol: "text-white",
    logo: "/whitelogo.png",
    logosize: { width: 399, height: 136 },
    sbcontent: [
      { menu: "Dashboard", path: "/user/admin", logo: "fa-solid fa-gauge" },
      {
        menu: "Subscribers",
        path: "/user/admin/subscribers",
        logo: "fa-solid fa-users",
      },
    ],
  };

  return (
    <>
      <div className="flex flex-grow-0">
        <div className="w-auto min-h-screen">
          <Sidebar design={design} />
        </div>
        <div className="block w-full">
          <div>
            <Navbar design={design} />
          </div>

          <div className="px-4 mt-4">{children}</div>
        </div>
      </div>
    </>
  );
}
