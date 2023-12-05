import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./UI/Card";
import ChartData from "./ExpensesChart/ChartData";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ChartData expenses={expenses} />
      {expenses.map((expense) => {
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
