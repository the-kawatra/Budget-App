import React, { useState } from "react";

const TransactionForm = ({ handleForm }) => {
  const [values, setValues] = useState({ desc: "", price: "", type: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    handleForm(values.desc, values.price, values.type);
    setValues({ desc: "", price: "", type: "" });
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} id="transaction-form" className="card">
      <h3>New Transaction</h3>
      <input
        type="text"
        name="desc"
        className="form-input"
        placeholder="Description..."
        autoComplete="off"
        required
        value={values.desc}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        className="form-input"
        placeholder="Price..."
        required
        value={values.price}
        onChange={handleChange}
      />
      <div
        name="transaction-type"
        id="transaction-type"
        value={values.type}
        onChange={handleChange}
      >
        <div>
          <input
            type="radio"
            name="type"
            id="income"
            value="income"
            required
            checked={values.type === "income"}
          />
          <label for="income">Income</label>
        </div>
        <div>
          <input
            type="radio"
            name="type"
            id="expense"
            value="expense"
            required
            checked={values.type === "expense"}
          />
          <label for="expense">Expense</label>
        </div>
      </div>
      <input type="submit" className="form-input" value="Add Transaction" />
    </form>
  );
};

export default TransactionForm;
