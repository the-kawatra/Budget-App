import React from "react";

const Header = ({ balance }) => {
  return (
    <header>
      <h1>Budget App</h1>
      <div className="balance">&#x20B9;{balance}</div>
    </header>
  );
};

export default Header;
