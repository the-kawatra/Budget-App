import React from "react";

const TransactionItem = ({ item, index, removeItem }) => {
  const removeHandle = (i) => {
    removeItem(i);
  };

  const bgcolor = item.type === "expense" ? "#ffa1a1" : "#00bacf";

  return (
    <div id="transaction-item" style={{ background: bgcolor }}>
      <button id="remove-item" onClick={() => removeHandle(index)}>
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
