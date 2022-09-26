import Link from "next/link";
import React from "react";

export default function Sidebar({ design }) {
  return (
    <>
      <div
        className={`${design.bgcolor} min-h-screen ${design.textcol} block pt-4`}
      >
        <div className="text-center mb-10">LOGO</div>
        <div className="text-left">
          <ul>
            {design.sbcontent.map((m, i) => (
              <Link href={m.path} key={i}>
                <li className="px-3 flex flex-grow-0 gap-2 items-center cursor-pointer">
                  <i className={`${m.logo} pl-2 py-3`}></i>
                  {m.menu}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
