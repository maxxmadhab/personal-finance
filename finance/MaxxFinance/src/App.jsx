import React, { useState } from "react";
import TransactionForm from "./components/Transactionform";
import TransactionList from "./components/Transactionlist";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chart from "./components/Chart";

import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (tx) => {
    setTransactions([...transactions, tx]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  return (
    <div>
    <Navbar />
    <div className="app-container">
      <h1>Log Expenses</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <Chart transactions={transactions} />
    </div>
    <Footer />
  
  </div>
  )
};

export default App;
