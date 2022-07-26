/*import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale,BarElement,Title,Tooltip,Legend, Bar } from 'react-chartjs-2'
const Graph = () => {


  const options = {
    plugins : {
      title:{
        display : true,
        text : "Feedback Chart"
      }
    },
    responsive : true,
    scales : {
      x:{
        stacked:true,
      },
      y: {
        stacked : true,
      }
    }
  }
  const piedata = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
      <div class = "mx-auto">

<div class="flex flex-row mx-auto items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
		<h2 class=" m-2">Product is easy to use</h2>
		<div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
			<div class="relative flex flex-row items-center flex-grow pb-5 group">
				
				<div class="relative flex justify-center  h-12 bg-red-600" style = {{width : "20%"}}>20%</div>
				<div class="relative flex justify-center  h-12 bg-red-500" style = {{width : "30%"}}>30%</div>
				<div class="relative flex justify-center  h-12 " style = {{width : "10%", backgroundColor:"orange"}}>10%</div>
        <div class="relative flex justify-center  h-12 bg-blue-400" style = {{width : "20%"}}>20%</div>
        <div class="relative flex justify-center  h-12 bg-green-400" style = {{width : "30%"}}>30%</div>
				
			</div>
    </div>
    
  </div>

  <div class="flex flex-row mx-auto  items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
		<h2 class=" m-2">Product speed is fast</h2>
		
		<div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
			<div class="relative flex flex-row items-center flex-grow pb-5 group">
				
				<div class="relative flex justify-center  h-12 bg-red-600" style = {{width : "20%"}}>20%</div>
				<div class="relative flex justify-center  h-12 bg-red-500" style = {{width : "30%"}}>30%</div>
				<div class="relative flex justify-center  h-12 " style = {{width : "10%", backgroundColor:"orange"}}>10%</div>
        <div class="relative flex justify-center  h-12 bg-blue-400" style = {{width : "20%"}}>20%</div>
        <div class="relative flex justify-center  h-12 bg-green-400" style = {{width : "30%"}}>30%</div>
				
			</div>
    </div>
    
  </div>

  <div class="flex flex-row mx-auto items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
		<h2 class=" m-2">Add text holders</h2>
		
		<div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
			<div class="relative flex flex-row items-center flex-grow pb-5 group">
				
				<div class="relative flex justify-center  h-12 bg-red-600" style = {{width : "20%"}}>20%</div>
				<div class="relative flex justify-center  h-12 bg-red-500" style = {{width : "30%"}}>30%</div>
				<div class="relative flex justify-center  h-12 " style = {{width : "10%", backgroundColor:"orange"}}>10%</div>
        <div class="relative flex justify-center  h-12 bg-blue-400" style = {{width : "20%"}}>20%</div>
        <div class="relative flex justify-center  h-12 bg-green-400" style = {{width : "30%"}}>30%</div>
				
			</div>
    </div>
    
  </div>

  <div class="flex flex-row mx-auto items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
		<h2 class=" m-2">Add text holders </h2>
		
		<div class="flex items-center flex-grow w-full mt-2 space-x-2 sm:space-x-3">
			<div class="relative flex flex-row items-center flex-grow pb-5 group">
				
				<div class="relative flex justify-center  h-12 bg-red-600" style = {{width : "20%"}}>20%</div>
				<div class="relative flex justify-center  h-12 bg-red-500" style = {{width : "30%"}}>30%</div>
				<div class="relative flex justify-center  h-12 " style = {{width : "10%", backgroundColor:"orange"}}>10%</div>
        <div class="relative flex justify-center  h-12 bg-blue-400" style = {{width : "20%"}}>20%</div>
        <div class="relative flex justify-center  h-12 bg-green-400" style = {{width : "30%"}}>30%</div>
				
			</div>
    </div>
    
  </div>
  <div class="flex justify-center mt-3 flex-grow w-full mt-2 space-x-2 sm:space-x-3">
 <div > 
  
  <h1 class = "text-center">   &#128562;  </h1>

  <div class="relative flex justify-center   p-3 bg-red-600" > Poor</div>
  
 </div>

 <div> 
  
  <h1 class = "text-center">     &#128533;  </h1>

  <div  class="relative flex justify-center p-3 bg-red-500" >Fair</div>
  
 </div>

 <div> 
  
  <h1 class = "text-center">   &#128528;  </h1>

  <div class="relative flex justify-center  p-3  "style = {{backgroundColor: "orange"}}>Neutral</div>
  
 </div>

 <div> 
  
  <h1 class = "text-center">   &#128516; </h1>

  <div class="relative flex justify-center p-3  bg-blue-400">Very Good</div>
  
 </div>

 <div> 
  
  <h1 class = "text-center " style = {{fontSize : "1rem"}}>  &#128512;    </h1>

  <div class="relative flex justify-center p-3  bg-green-400" >Excellent</div>
  
 </div>
 </div>
     
      </div>
  )
}

export default Graph
*/

import React from 'react';

import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export const options = {
  indexAxis: 'y',
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
      text: '5 point Likert Graph',
      font: {
        weight: 'bold',
        size: 25,

      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["Product is easy to use","Product speed is fast","Add text holders","Add text holders","Add text holders"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Poor',
      data: [-23,-12,-11,-43,-13],
      backgroundColor: 'rgb(255, 0, 0)',
    },
    {
      label: 'Fair',
      data: [-11,-13,-43,-54,-23],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Neutral',
      data: [-22,-13,-23,-12,-31],
      backgroundColor: 'rgb(255, 165, 0)',
    },
    {
      label: 'Very Good',
      data: [22,12,23,43,12],
      backgroundColor: 'rgb(0, 0, 139)',
    },
    {
      label: 'Excellent',
      data: [22,6,23,12,32],
      backgroundColor: '#3CCF4E',
    },
  ],
};

const Likert  = () => {
  return <Bar options={options} data={data} plugins = {[ChartDataLabels]}/>;
}

export default Likert
/*
import React from 'react';
import {
Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
     // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Dataset 3',
      //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

export function Graph() {
  return <Bar options={options} data={data} />;

  <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$37,500</span>
}*/