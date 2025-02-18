import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Chart = ({ transactions }) => {
  // Aggregate monthly expenses from transactions
  const monthlyExpenses = transactions.reduce((acc, tx) => {
    const month = new Date(tx.date).toLocaleString("default", { month: "short" });
    acc[month] = (acc[month] || 0) + parseFloat(tx.amount);
    return acc;
  }, {});

  // Convert aggregated data into an array for the chart
  const data = Object.keys(monthlyExpenses).map((month) => ({
    month,
    amount: monthlyExpenses[month],
  }));

  return (
    <div className="chart-container">
      <h2>Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
