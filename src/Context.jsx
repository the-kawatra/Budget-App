import { createContext, useState } from "react";

export const TransactionContext = createContext();

const Context = ({ children }) => {
  const [transaction, setTransaction] = useState([]);

  return (
    <TransactionContext.Provider value={{ transaction, setTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default Context;
