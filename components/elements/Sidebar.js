import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar({
  design,
  toggleSidebar,
  handleSidebar,
  sideMenu,
}) {
  const router = useRouter();
  return (
    <div
      className={`${design.bgcolor} ${design.textcol} ${
        toggleSidebar ? "" : "hidden"
      } md:flex flex-col px-2 min-w-max h-full`}
    >
      <div
        onMouseEnter={handleSidebar}
        className="hidden md:block absolute h-full w-1 bg-transparent z-30 left-0"
      ></div>
      <div className="mx-auto pt-3 md:pt-6 justify-center flex">
        <div className={`md:${toggleSidebar ? "" : "hidden"} w-20`}>LOGO</div>
      </div>
      <div className="text-center md:hidden w-full">
        <i
          onClick={handleSidebar}
          className="fa-regular fa-circle-xmark cursor-pointer"
        ></i>
      </div>
      <div className="mt-10">
        {sideMenu ? (
          sideMenu.map((menu, i) => (
            <div key={i} className="flex columns-2 gap-1 pb-0">
              <div>
                <Link href={menu.url}>
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf(menu.url) !== -1
                        ? "text-blue-400 hover:text-blue-600"
                        : "text-white hover:text-gray-200")
                    }
                  >
                    <i
                      className={`${menu.icon} text-sm md:text-2xl px-2 cursor-pointer`}
                    ></i>
                  </a>
                </Link>
              </div>
              <div className={`${toggleSidebar ? "" : "hidden"}`}>
                <Link href={menu.url}>
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf(menu.url) !== -1
                        ? "text-blue-400 hover:text-blue-600"
                        : "text-white hover:text-gray-200")
                    }
                  >
                    {menu.lable}
                  </a>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
