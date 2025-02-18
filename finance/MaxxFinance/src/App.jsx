import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Chart from "./components/chart";

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
