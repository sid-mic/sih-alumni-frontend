import React from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    datalabels: {
      color: '#ffffff',
      font: {
        weight: 'bold',
        size: 20,
      },
      
    },
    
    
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Feedback Survey Results',
    },
  },
};


export const data = {
  labels: ["Question 1","Question 2", "Question 3", "Question 4", "Question 5"],
  datasets: [
    {
      label: '2021',
      data: [5,24,3,25,23],
      borderColor: 'blue',
      backgroundColor: 'blue',
    },
   
    {
      label: '2022',
      data: [22,1,45,34,22],
      borderColor: 'Orange',
      backgroundColor: 'Orange',
    },
  ],
};

const HorizontalBar = () => {

  return (
    <div>
        <h1 className = "text-center mt-3 mb-3"> Employee feedback Survey </h1>
      <Bar options={options} data={data} plugins = {[ChartDataLabels]} /> </div>
  )
}

export default HorizontalBar