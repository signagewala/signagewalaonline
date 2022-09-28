import React, { useEffect, useState } from "react";
import Navbar from "../elements/Navbar";
import Sidebar from "../elements/Sidebar";

export default function Vend({ children }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData((userData) =>
      JSON.parse(window.localStorage.getItem("usercred"))
    );
  }, []);

  const design = {
    bgcolor: "bg-blue-900",
    textcol: "text-white",
    logo: "/whitelogo.png",
    logosize: { width: 399, height: 136 },
    sbcontent: [
      { menu: "Dashboard", path: "/user/vend", logo: "fa-solid fa-gauge" },
      {
        menu: "Subscribers",
        path: "/user/vend/subscribers",
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
            <Navbar userData={userData} design={design} />
          </div>

          <div className="px-4 mt-4">{children}</div>
        </div>
      </div>
    </>
  );
}
