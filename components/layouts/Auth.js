import React from "react";
import Navbar from "../elements/Navbar";
import Sidebar from "../elements/Sidebar";

export default function Auth({ children }) {
  const design = {
    bgcolor: "bg-white",
    textcol: "text-gray-600",
    logo: "/colorlogo.png",
    logosize: { width: 399, height: 136 },
    nbcontent: [
      { menu: "Login", path: "/auth/login" },
      { menu: "Register", path: "/auth/register" },
    ],
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="fixed w-full">
          <Navbar design={design} />
        </div>

        <div className="px-4 mt-16">{children}</div>
      </div>
    </>
  );
}
