import React from "react";
import Header from "./Header";
import Body from "./Body";
import ProfileCard from "./ProfileCard";
import Sidebar from "./Sidebar";


// switch to bootstrap?

function App() {
  return (
    <React.Fragment>
      <div class="page">
        <Header />
        <hr></hr>
        <Body />
      </div>
    </React.Fragment>
  );
}

export default App;