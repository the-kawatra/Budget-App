import React, { useContext, useState } from "react";
import { TransactionContext } from "../Context";
import TransactionItem from "./TransactionItem";

const Transactions = () => {
  const [search, setSearch] = useState("");
  const { transaction } = useContext(TransactionContext);

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
            <TransactionItem item={item} key={index} index={index} />
          ))}
      </div>
    </>
  );
};

export default Transactions;
