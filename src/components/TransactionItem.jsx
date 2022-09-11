import React from "react";

const TransactionItem = ({ item, index, removeItem }) => {
  const removeHandle = (i) => {
    removeItem(i);
  };

  const bgcolor = item.type === "expense" ? "#d8737f" : "#475979";

  return (
    <div id="transaction-item" style={{ background: bgcolor }}>
      <button id="remove-item" onClick={() => removeHandle(index)}>
        X
      </button>
      <div id="desc">{item.desc}</div>
      <div id="price">&#x20B9;{item.price}</div>
    </div>
  );
};

export default TransactionItem;
