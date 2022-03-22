import styled from "styled-components";

function DashboardLeft () {
  return (
      <Left className="left">
        <H2>Dashbord</H2>
        <ul>
          <li>
            <P>Inventory</P>
          </li>
          <li>
            <P>Respondents</P>
          </li>
        </ul>
      </Left>
  );
};

export default DashboardLeft;

const Left = styled.div`
  // background-color: #f3f3f3;
  border: 1px solid rgba(37, 37, 37, 0.15);
  height: 100vh;
  width: 20%;
`;

const H2 = styled.h2`
  margin: 20px 40px;
  font-family: Nunito Sans;
`;

const P = styled.p`
  font-family: Nunito Sans;
  padding: 20px 30px 30px 40px;
  &:hover {
    background: rgba(127, 196, 162, 0.45);
  }
`;
