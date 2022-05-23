import React, { useRef, useEffect, useState } from "react";
import Chart, { registerables } from 'chart.js/auto';
import "../styles/HistoryChart.css";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  
  
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Daily Prices",
              data: [
                { x: 1, y: 15 }, 
                { x: 2, y: 12 }, 
                { x: 3, y: 25 }
              ],
              backgroundColor: "#010546",
              borderColor: "#010546",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);
  return (
    <div className="chartContainer">
      <div></div>
      <div>
        <canvas ref={chartRef} id="chart" width={150} height={150} style={{backgroundColor: "white"}}></canvas>
      </div>
    </div>
  );
};

export default HistoryChart;
