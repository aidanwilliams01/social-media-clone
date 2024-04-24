import React from "react";
import ProfileCard from "./ProfileCard";
import Sidebar from "./Sidebar";

function Left() {
  return (
    <div>
      <ProfileCard />
      <br></br>
      <Sidebar />
    </div>
  )
}

export default Left;