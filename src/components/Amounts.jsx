import React from "react";

const Amounts = ({ income, expense }) => {
  return (
    <>
      <div id="income-card" className="total card">
        <h3>Total Income</h3>
        <span>
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(income)}
        </span>
      </div>
      <div id="expense-card" className="total card">
        <h3>Total Expense</h3>
        <span>
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(expense)}
        </span>
      </div>
    </>
  );
};

export default Amounts;
