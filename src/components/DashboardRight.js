import styled from "styled-components";
import DashboardRightData from "./DashboardRightData";
import DashboardRightClient from "./DashboardRightClient";
import DashboardGraphL from "./DashboardGraphL";
import Map from "./Map";


function DashboardRight() {
  return (
      <Right className="right">
        <H1>Respondents Data Dashboard</H1>
        <Wrapper>
          <DashboardRightData />
        </Wrapper>
          <DashboardGraphL />
          <Map />
        <DashboardRightClient />
      </Right>
  );
};

export default DashboardRight;


const Right = styled.div`
  background-color: #e5e5e5;
  width: 80%;
`;

const H1 = styled.h1`
  font-family: Nunito Sans;
  margin: 0;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(37, 37, 37, 0.15);
`;

const Wrapper = styled.div`
  border: 1px solid rgba(37, 37, 37, 0.15);
  border-radius: 10px;
  margin: 10px;
  background: rgba(251, 250, 252, 0.55);
  margin-right: 100px;
`;

