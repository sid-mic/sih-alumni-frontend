import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


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

const labels = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Yes',
      data: [12,23,25,32,43],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'No',
      data: [-12,-23,-25,-23,-13],
      backgroundColor: 'rgb(255, 99, 132)',
     
    },
    
  ],
};

const YesOrNo = ()  => {
  return (
    <Bar options={options} data={data} plugins = {[ChartDataLabels]}/>
  )
}

export default YesOrNo
