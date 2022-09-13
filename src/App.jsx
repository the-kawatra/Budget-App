import { useContext } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Amounts from "./components/Amounts";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";
import { TransactionContext } from "./Context";

function App() {
  const [amounts, setAmounts] = useState({
    income: 0,
    expense: 0,
    balance: 0,
  });

  const { transaction } = useContext(TransactionContext);

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
      {amounts.balance < 0 ? <Alert /> : null}
      <div id="app-body">
        <div id="app-grid-left">
          <Amounts income={amounts.income} expense={amounts.expense} />
          <TransactionForm />
        </div>
        <div id="app-grid-right">
          <Transactions />
        </div>
      </div>
    </>
  );
}

export default App;
