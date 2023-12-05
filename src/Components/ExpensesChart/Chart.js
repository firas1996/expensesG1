import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ data }) => {
  return (
    <div className="chart">
      {data.map((item) => (
        <ChartBar label={item.label} fill={item.value} />
      ))}
    </div>
  );
};

export default Chart;
