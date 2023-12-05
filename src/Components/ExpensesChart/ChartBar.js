import React from "react";

const ChartBar = ({ label, fill }) => {
  return (
    <div>
      <div>
        <div style={{ height: fill }}></div>
      </div>
      <div>{label}</div>
    </div>
  );
};

export default ChartBar;
