import React, { useState } from "react";

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState("income");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpense;

  const handleAddTransaction = () => {
    if (!title || !amount) return;
    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
    };
    setTransactions([...transactions, newTransaction]);
    setTitle("");
    setAmount("");
    setType("income");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  return (
    <div className="tracker-container">
      <h2>Expense Tracker</h2>

      <div className="header-container">
        <div className="balance">
          <h3 data-testid="balance-amount">Balance: ₹{balance}</h3>
        </div>

        <button
          className="toggle-form-button"
          data-testid="toggle-form-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Open Form"}
        </button>
      </div>

      {showForm && (
        <div className="form">
          <input
            type="text"
            data-testid="title-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            data-testid="amount-input"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "+") {
                e.preventDefault();
              }
            }}
            min="0"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            data-testid="type-select"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button
            data-testid="add-button"
            onClick={handleAddTransaction}
          >
            Add Transaction
          </button>
        </div>
      )}

      <div className="summary">
        <div data-testid="income-amount">
          Income: ₹{totalIncome}
        </div>
        <div data-testid="expenses-amount">
          Expense: ₹{totalExpense}
        </div>
      </div>

      <input
        type="text"
        data-testid="search-input"
        placeholder="Search..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="transactions">
        {filteredTransactions.map((t) => (
          <li
            key={t.id}
            className={t.type}
            data-testid="transaction-item"
          >
            <span>
              {t.title}: ₹{t.amount}
            </span>
            <button
              data-testid="delete-button"
              onClick={() => handleDelete(t.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {filteredTransactions.length === 0 && (
        <div
          className="no-transactions"
          data-testid="no-transactions"
        >
          No transactions found
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;
