import React from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import Sidebar from "./Sidebar";

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr></hr>
      <ProfileCard />
      <br></br>
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
