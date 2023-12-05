import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ data }) => {
  let values = data.map((element) => element.value);
  const max = Math.max(...values);
  // const max = values.reduce((acc, cur) => {
  //   return acc + cur;
  // }, 0);
  return (
    <div className="chart">
      {data.map((item) => (
        <ChartBar label={item.label} value={item.value} max={max} />
      ))}
    </div>
  );
};

export default Chart;
