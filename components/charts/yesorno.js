/*import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {useState, useEffect }from "React"

export const options = {
  plugins: {

    datalabels: {
      color: '#ffffff',
      font: {
        weight: 'bold',
        size: 20,
      },
      
    },
    
    title: {
      display: true,
      text: 'Yes/No',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      beginAtZero : true,
      
    },
    y: {
      stacked: true,
      beginAtZero : true,
      ticks : {   
        min: -500,
        stepSize : 50,
        width : 5,
        max: + 500,
        }
    },
  },
};

const labels = ["Were you ever hired by your Problem Statement creator Ministry/Company", "Hackathon experience helped you in getting placed within in India or abroad?", "Were you ever hired for internship by your Problem Statement creator Ministry/Company?", ];

const arr = [164,78,161];


export const data = {
  labels,
  datasets: [
    {
      label: 'Yes',
      data: [12,23,25],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'No',
      data: arr.map((n) => -n),
      backgroundColor: 'rgb(255, 99, 132)',
     
    },
    
  ],
};

const YesOrNo = ()  => {
  //const [no,setNo] = useState([]);
  return (
    <Bar options={options} data={data} plugins = {[ChartDataLabels]}/>
  )
}

export default YesOrNo*/

import React from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import FormLoader from "../FormLoader";
import { padding } from "tailwindcss/defaultTheme";

const labels = [
  "Q1",
  "Q2",
  "Q3",
];

const YesOrNo = () => {
  const [dat, setDat] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // chartYesOrNoData
 /* useEffect(() => {
    axios()
      .get("chartYesOrNoData")
      .then((response) => {
        setDat(response.data);
        setIsLoading(false);
      });
  }, []);*/

 /* if (isLoading) {
    return <FormLoader />;
  }*/
  const data = {
    labels,
    datasets: [
      {
        label: "Yes",
        data: [12,23,45],
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "No",
        data: [-34,-164,-12],
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
        min: - 200,
        max:  + 100,
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
