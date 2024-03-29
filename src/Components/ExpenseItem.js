import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./UI/Card";
import { useState } from "react";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
