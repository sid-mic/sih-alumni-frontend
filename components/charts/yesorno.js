import React from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import FormLoader from "../FormLoader";

const labels = [
  "Were you ever hired by your Problem Statement creator Ministry/Company",
  "Hackathon experience helped you in getting placed within in India or abroad?",
  "Were you ever hired for internship by your Problem Statement creator Ministry/Company?",
  "Hackathon experience helped you in getting internship within India or Abroad",
  "Have you perceived higher studies after your bachelor degree?",
  "Have you received any award at State/National level/International level?",
  "Have you registered Intellectual Property (IP)?",
  "Have you registered any startup/company?",
  "Have you received any investment?",
];

const YesOrNo = () => {
  const [dat, setDat] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // chartYesOrNoData
  useEffect(() => {
    axios()
      .get("chartYesOrNoData")
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
        label: "Yes",
        data: dat["Yes"],
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "No",
        data: dat["No"],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
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
        text: "Yes/No",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        min:
          Math.min.apply(
            null,
            dat["No"].map((n) => -n)
          ) - 3,
        max: Math.max.apply(null, dat["Yes"]) + 3,
      },
    },
  };

  return <Bar options={options} data={data} plugins={[ChartDataLabels]} />;
};

export default YesOrNo;
