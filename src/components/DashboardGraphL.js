import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardGraphR from "./DashboardGraphR";

ChartJS.register(ArcElement, Tooltip, Legend);


function DashboardGraphLeft() {
  const dataChart = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Wrapper>
      <Left>
        <Doughnut data={dataChart} />
      </Left>
      <Right >
        <DashboardGraphR />
      </Right>
    </Wrapper>
  )
};

export default DashboardGraphLeft;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div`
  border: 1px solid rgba(37, 37, 37, 0.15);
  margin: 10px;
  background: white;
  width: 40%;
`;

const Right = styled.div`
  border: 1px solid rgba(37, 37, 37, 0.15);
  margin: 10px;
  background: white;
  width: 40%;
`;