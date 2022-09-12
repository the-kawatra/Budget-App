import { useEffect, useState } from "react";
import "./App.css";
import Amounts from "./components/Amounts";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";

function App() {
  const [amounts, setAmounts] = useState({
    income: 0,
    expense: 0,
    balance: 0,
  });

  const [transaction, setTransaction] = useState([]);

  const handleForm = (desc, price, type) => {
    setTransaction([
      ...transaction,
      {
        desc: desc,
        price: price,
        type: type,
      },
    ]);
  };

  useEffect(() => {
    let income = 0,
      expense = 0,
      balance = 0;
    transaction.map((item) => {
      item.type === "expense"
        ? (expense += parseInt(item.price))
        : (income += parseInt(item.price));
    });
    balance = income - expense;
    setAmounts({ income, expense, balance });
  }, [transaction]);

  return (
    <>
      <Header balance={amounts.balance} />
      <div id="app-body">
        <div id="app-grid-left">
          <Amounts income={amounts.income} expense={amounts.expense} />
          <TransactionForm handleForm={handleForm} />
        </div>
        <div id="app-grid-right">
          <Transactions
            transaction={transaction}
            setTransaction={setTransaction}
          />
        </div>
      </div>
    </>
  );
}

export default App;
