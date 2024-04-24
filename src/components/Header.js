import React from "react";

function Header() {
  return (
    <div class="header">
      <div class="headerDiv">Home</div>
      <div class="headerDiv">Notifications</div>
      <div class="headerDiv">Messages</div>

      <input placeholder="Search"></input>
      <button>Tweet</button>
    </div>
  )
}

export default Header;