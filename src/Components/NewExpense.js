import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addExpense }) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className="new-expense">
      {toggle ? (
        <ExpenseForm abc={toggleHandler} getData={addExpense} />
      ) : (
        <button onClick={toggleHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
