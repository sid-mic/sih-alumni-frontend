import React from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import FormLoader from "../FormLoader";

const labels = [
  "Q1",
  "Q2",
  "Q3",
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
        data: dat["No"].map((n) => -n),
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
        font : {
          size : 20,
          padding : 40,
        },
        
        text : ['Q1 : Hackathon experience helped you in getting placed within in India or abroad? ', 'Q2 :Were you ever hired for internship by your Problem Statement creator Ministry/Company?', " Q3 :Hackathon experience helped you in getting internship within India or Abroad" ],

        padding : {
          top : 10,
          bottom : 10,
        }
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
          ) - 30,
        max: Math.max.apply(null, dat["Yes"]) + 30,
      },
    },
  };

   return (
    
  <div >

  <Bar style = {{width :'70%',height : '100vh', margin : 'auto'}}  width={85} height={60} options={options} data={data} plugins={[ChartDataLabels]} />
 
  </div>
  
  );
};

export default YesOrNo;
