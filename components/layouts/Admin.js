import React, { useEffect, useState } from "react";
import Navbar from "../elements/Navbar";
import Sidebar from "../elements/Sidebar";
import data from "../../utils/data";

export default function Admin({ children }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(
      (userData) => JSON.parse(window.localStorage.getItem("usercred")) || {}
    );
  }, []);
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

  const sideMenu = data.adminroutes;
  const handleSidebar = () => {
    setToggleSidebar((toggleSidebar) => !toggleSidebar);
  };

  return (
    <>
      <div className="flex flex-grow-0">
        <div className="w-auto min-h-screen">
          <Sidebar
            sideMenu={sideMenu}
            toggleSidebar={toggleSidebar}
            handleSidebar={handleSidebar}
            design={design}
          />
        </div>
        <div className="block w-full">
          <div>
            <Navbar
              handleSidebar={handleSidebar}
              toggleSidebar={toggleSidebar}
              userData={userData}
              design={design}
            />
          </div>

          <div className="px-4 mt-4">{children}</div>
        </div>
      </div>
    </>
  );
}
