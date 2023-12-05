import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./UI/Card";
import ChartData from "./ExpensesChart/ChartData";
import ExpensesFilter from "./ExpensesChart/ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [setselectValue, setSetselectValue] = useState("2023");
  const selectHandler = (val) => {
    setSetselectValue(val);
  };
  const filtredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === setselectValue;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        setselectValue={setselectValue}
        selectHandler={selectHandler}
      />
      <ChartData expenses={filtredExpenses} />
      {filtredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
