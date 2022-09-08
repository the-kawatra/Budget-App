import React from "react";

const TransactionItem = ({ item, index, removeItem }) => {
  const removeHandle = (i) => {
    removeItem(i);
  };

  const bgcolor = item.type === "expense" ? "#ffdaba" : "#b1ffff";

  return (
    <div id="transaction-item" style={{ background: bgcolor }}>
      <button id="remove-item" onClick={() => removeHandle(index)}>
        Delete
      </button>
      <div id="desc">{item.desc}</div>
      <div id="price">&#x20B9;{item.price}</div>
    </div>
  );
};

export default TransactionItem;
