import Chart from "chart.js/auto";
import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartBox } from "./AdminCardsContainer.styled";
function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Mock",
        backgroundColor: "rgba(255, 148, 0, 1)",
        borderRadius: 5,
        borderSkipped: false,
        data: [
          [0, 2],
          [0, 7],
          [0, 9],
          [0, 3],
          [0, 8],
          [0, 6],
        ],
      },
      {
        label: "Quiz",
        backgroundColor: "rgba(91, 142, 125, 1)",
        borderRadius: 5,
        borderSkipped: false,
        data: [
          [0, 3],
          [0, 5],
          [0, 4],
          [0, 6],
          [0, 8],
          [0, 9],
        ],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Attempts",
    },
    plugins: {
      legend: {
        align: "end",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <ChartBox>
      <Bar data={data} options={options} />  
    </ChartBox>
  );
}

export default BarChart;

// const [UserData,setUserData]=useState({
//   labels:UserData.map((data)=>data.month),
//   datasets:[{
//     label:"Mock",
//     data:UserData.map((data)=>data.mock)
//   }],
//   datasets:[{
//     label:"Quiz",
//     data:UserData.map((data)=>data.quiz)
//   }]
// })
// drawOnChartArea:false,
// drawBorder:false,
// display:false
