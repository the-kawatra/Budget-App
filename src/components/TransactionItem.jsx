import React, { useContext } from "react";
import { TransactionContext } from "../Context";

const TransactionItem = ({ item, index }) => {
  const { transaction, setTransaction } = useContext(TransactionContext);

  const removeHandle = () => {
    let temp = transaction.filter((item, i) => i !== index);
    setTransaction(temp);
  };

  const bgcolor = item.type === "expense" ? "#ffa1a1" : "#00bacf";

  return (
    <div id="transaction-item" style={{ background: bgcolor }}>
      <button id="remove-item" onClick={() => removeHandle()}>
        X
      </button>
      <div id="desc">{item.desc}</div>
      <div id="price">
        {Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(item.price)}
      </div>
    </div>
  );
};

export default TransactionItem;
