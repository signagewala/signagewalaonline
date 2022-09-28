import React, { useEffect, useState } from "react";
import Admin from "../../../components/layouts/Admin";

export default function Dashboard() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData((userData) =>
      JSON.parse(window.localStorage.getItem("usercred"))
    );
  }, []);

  return (
    <>
      <div>{userData.cname}</div>
    </>
  );
}
Dashboard.layout = Admin;
