import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

export default function PieChart(props) {
  return (
    <div
      className="rounded-md overflow-hidden flex flex-col items-center"
      style={{ width: props.width, padding: "20px" }}
    >
      <p className="text-xl font-semibold mb-2 align-center">{props.name}</p>
      <Pie data={props.data} style={{maxHeight: 350}}/>
    </div>
  );
}
