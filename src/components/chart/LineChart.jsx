import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  SubTitle,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  SubTitle
);

const LineChart = ({ data }) => {
  const chartData = {
    // Definisikan data grafik garis di sini
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    datasets: [
      {
        label: "Contoh Data",
        data: data, // Menggunakan prop 'data' yang diterima dari komponen
        fill: false,
        borderColor: "rgb(255, 0, 0)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-4 box__shadow__chart">
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
