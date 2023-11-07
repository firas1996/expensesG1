import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const getData = (data) => {
    console.log(data);
  };
  return (
    <div className="new-expense">
      <ExpenseForm getData={getData} />
    </div>
  );
};

export default NewExpense;
