import React from "react";

const Header = ({ balance }) => {
  return (
    <header>
      <h1>Budget App</h1>
      <div className="balance">
        Balance:{" "}
        {Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(balance)}
      </div>
    </header>
  );
};

export default Header;
