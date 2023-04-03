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
  
  const dsum = dat["Disagree"].reduce((sum,n) => sum+n,0)
  const sdsum = dat["Strongly Disagree"].reduce((sum,n) => sum+n,0)
  const nsum = dat["Maybe"].reduce((sum,n) => sum+n,0)
  const agrsum = dat["Agree"].reduce((sum,n) => sum+n,0)
  const sagrsum = dat["Strongly Agree"].reduce((sum,n) => sum+n,0)

  const data = {
    labels,

    datasets: [
      {
        label: "Strongly Disagree",
        data: dat["Strongly Disagree"].map((n) => Math.round((n/sdsum)*100)),
        backgroundColor: "rgb(255, 0, 0)",
      },
      {
        label: "Disagree",
        data: dat["Disagree"].map((n) => Math.round((n/dsum)*100)),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Neutral",
        data: dat["Maybe"].map((n) => Math.round((n/nsum)*100)),
        backgroundColor: "rgb(255, 165, 0)",
      },
      {
        label: "Agree",
        data: dat["Agree"].map((n) => Math.round((n/agrsum)*100)),
        backgroundColor: "rgb(0, 0, 139)",
      },
      {
        label: "Strongly Agree",
        data: dat["Strongly Agree"].map((n) => Math.round((n/sagrsum)*100)),
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
        text: "Alumni Feedback",
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
          ) - 30,
        max:
          Math.max.apply(
            null,
            dat["Maybe"].map(
              (maybe, index) =>
                maybe + dat["Agree"][index] + dat["Strongly Agree"][index]
            )
          ) + 30,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar options={options} data={data} plugins={[ChartDataLabels]} />;
};

export default Likert;
