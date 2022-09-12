import React, { useState } from "react";
import TransactionItem from "./TransactionItem";

const Transactions = ({ transaction, setTransaction }) => {
  const [search, setSearch] = useState("");

  const removeItem = (i) => {
    let temp = transaction.filter((item, index) => index !== i);
    setTransaction(temp);
  };

  return (
    <>
      <div id="transactions-list-head" className="card">
        <h3>Transactions List</h3>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div id="transactions-list">
        {transaction
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.desc.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((item, index) => (
            <TransactionItem
              item={item}
              key={index}
              index={index}
              removeItem={removeItem}
            />
          ))}
      </div>
    </>
  );
};

export default Transactions;
