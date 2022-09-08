import React from "react";

const Amounts = ({ income, expense }) => {
  return (
    <div id="amounts">
      <div className="total">
        <h3>Total Income</h3>
        <p>&#x20B9;{income}</p>
      </div>
      <div className="total">
        <h3>Total Expense</h3>
        <p>&#x20B9;{expense}</p>
      </div>
    </div>
  );
};

export default Amounts;
