import React from "react";
import ProfileCard from "./ProfileCard";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RecommendedSidebar from "./RecommendedSidebar";

function Body() {
  return (
    <div class="body">
      <div class="left">
        <ProfileCard />
        <br></br>
        <Sidebar />
      </div>
      <div class="center">
        <Feed />
      </div>
      <div class="right">
        <RecommendedSidebar />
      </div>
    </div>
  )
}

export default Body;