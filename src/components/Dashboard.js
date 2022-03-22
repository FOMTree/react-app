import styled from "styled-components";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";
import Navigation from "./Navigation";

function Dashboard() {
  return (
      <Wrapper>
        <DashboardLeft />
        <DashboardRight />
      </Wrapper>
  )
}

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

