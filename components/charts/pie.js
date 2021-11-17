import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function Pie(props) {
  return (
    <div
      className="shadow-lg rounded-md overflow-hidden flex flex-col items-center"
      style={{ width: props.width, padding: "10px" }}
    >
      <p className="text-xl font-semibold mb-2 align-center">{props.name}</p>
      <Doughnut data={props.data} />
    </div>
  );
}
