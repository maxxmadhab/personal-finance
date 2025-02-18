



const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <ul className="transaction-list">
      {transactions.map((tx) => (
        <li key={tx.id} className="transaction-item">
          <span>{tx.date} - {tx.description} - ₹{tx.amount}</span>
          <button onClick={() => deleteTransaction(tx.id)} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
