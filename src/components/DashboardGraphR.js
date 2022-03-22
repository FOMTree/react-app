import styled from "styled-components";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function DashboardGraphR() {
  const data = {
    labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 300, 500, 200, 120, 500, 400],
        borderWidth: 2,
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      // {
      //   label: "Dataset 2",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default DashboardGraphR;