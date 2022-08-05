import React from "react";

import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import FormLoader from "../FormLoader";

const labels = [
  "Whether SIH helped in building your confidence?",
  "Did your success in SIH helped for admission in higher studies",
  "Would you recommend other students to participate in such future initiatives?",
  "Did Participating in this hackathon make you more aware of your social?",
];

const Likert = () => {
  const [dat, setDat] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios()
      .get("chartData")
      .then((response) => {
        setDat(response.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <FormLoader />;
  }

  const data = {
    labels,

    datasets: [
      {
        label: "Disagree",
        data: dat["Disagree"],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Strongly Disagree",
        data: dat["Strongly Disagree"],
        backgroundColor: "rgb(255, 0, 0)",
      },
      {
        label: "Neutral",
        data: dat["Maybe"],
        backgroundColor: "rgb(255, 165, 0)",
      },
      {
        label: "Agree",
        data: dat["Agree"],
        backgroundColor: "rgb(0, 0, 139)",
      },
      {
        label: "Strongly Agree",
        data: dat["Strongly Agree"],
        backgroundColor: "#3CCF4E",
      },
    ],
  };

  const options = {
    minBarLength: 20,
    indexAxis: "y",
    plugins: {
      datalabels: {
        color: "#ffffff",
        font: {
          weight: "bold",
          size: 20,
        },
      },
      title: {
        display: true,
        text: "5 point Likert Graph",
        font: {
          weight: "bold",
          size: 25,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        min:
          Math.min.apply(
            null,
            dat["Strongly Disagree"].map(
              (st_dis, index) => st_dis + dat["Disagree"][index]
            )
          ) - 3,
        max:
          Math.max.apply(
            null,
            dat["Maybe"].map(
              (maybe, index) =>
                maybe + dat["Agree"][index] + dat["Strongly Agree"][index]
            )
          ) + 3,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar options={options} data={data} plugins={[ChartDataLabels]} />;
};

export default Likert;
