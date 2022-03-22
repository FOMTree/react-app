import styled from "styled-components";

function DashboardRightData() {
  return (
    <DataContainer>
      <Li className="weekly">
        <Title>WEEKLY</Title>
        <Flex>
          <Respondants className="respondadnts">
            <div className="number">
              <Number>20</Number>
              <P>Respondants</P>
            </div>
          </Respondants>
          <Households className="households">
            <div className="number">
              <Number>15</Number>
              <P>Households</P>
            </div>
          </Households>
        </Flex>
      </Li>
      <Li className="weekly">
        <Title>MONTHLY</Title>
        <Flex>
          <Respondants className="respondadnts">
            <div className="number">
              <Number>20</Number>
              <P>Respondants</P>
            </div>
          </Respondants>
          <Households className="households">
            <div className="number">
              <Number>15</Number>
              <P>Households</P>
            </div>
          </Households>
        </Flex>
      </Li>
      <Li className="weekly">
        <Title>ANNUALLY</Title>
        <Flex>
          <Respondants className="respondadnts">
            <div className="number">
              <Number>20</Number>
              <P>Respondants</P>
            </div>
          </Respondants>
          <Households className="households">
            <div className="number">
              <Number>15</Number>
              <P>Households</P>
            </div>
          </Households>
        </Flex>
      </Li>
    </DataContainer>
  );
};

export default DashboardRightData;


const DataContainer = styled.ul`
  display: felx;
  flex-direction: row;
  justify-content: space-between;
`;

const Li = styled.li`
  border: 1px solid rgba(37, 37, 37, 0.15);
  border-radius: 10px;
  margin: 10px;
  background: white;
`;

const Title = styled.p`
  background: rgba(121, 193, 157, 0.95);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  text-align: center;
  color: white;
  font-family: Nunito Sans;
  padding: 5px 0;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const Respondants = styled.div`
  border-right: 1px solid rgba(37, 37, 37, 0.15);
  padding: 10px;
`;

const Households = styled.div`
  padding: 10px;
`;

const Number = styled.p`
  font-family: Nunito Sans;
  font-size: 2rem;
`;

const P = styled.p`
  font-size: 1.3rem;
`;