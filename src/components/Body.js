import React from "react";
import ProfileCard from "./ProfileCard";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div class="body">
      <div>
        <ProfileCard />
        <br></br>
        <Sidebar />
      </div>
    </div>
  )
}

export default Body;