import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from "../../utils/axios";
import { useEffect, useState } from "react";

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
    },
  },
};
const labels = ["Were you ever hired by your Problem Statement creator Ministry/Company", "Hackathon experience helped you in getting placed within in India or abroad?", "Were you ever hired for internship by your Problem Statement creator Ministry/Company?", "Hackathon experience helped you in getting internship within India or Abroad", "Have you perceived higher studies after your bachelor degree?" , "Have you received any award at State/National level/International level?" , "Have you registered Intellectual Property (IP)?", "Have you registered any startup/company?","Have you received any investment?"];

const labels = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6","Question 7","Question 8","Question 9"];



const YesOrNo = ()  => {
  const [dat,setDat] = useState([])
  const [yes,setYes] = useState([])
  const [no,setNo] = useState([])
  const data = {
    labels,
    datasets: [
      {
        label: 'Yes',
        data: labels.map((index , val) => yes[val]),
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'No',
        data : labels.map((index , val) => no[val]),
        backgroundColor: 'rgb(255, 99, 132)',
       
      },
      
    ],
  };
// chartYesOrNoData
    useEffect(() => {
      axios()
        .get("chartYesOrNoData")
        .then((response) => {
          console.log(response);
          setDat(response.data)
          console.log(dat)
          Object.entries(dat).map(([type, val]) => type === "Yes" && setYes(val))
        Object.entries(dat).map(([type, val]) => type === "No" && setNo(val))
        // setSubmissions(response.data.data);
        // setIsLoading(false);
        });
    }, []);

  return (
    <Bar options={options} data={data} plugins = {[ChartDataLabels]}/>
  )
}

export default YesOrNo
