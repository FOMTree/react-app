import styled from "styled-components";
import {requestsDummyData, respondentsListDummyData } from './Data.js';

function DashboardRightClient() {
  return (
    <div>
      <Wrapper className="wrapper">
        <H2>Client Infomation</H2>
        <InsideWrapper>
          <Ul className="rightUl">
            <Li>Start Date</Li>
            {requestsDummyData.map((requestDummyData) => (
              <Li key="{requestDummyData.id}">{requestDummyData.StartDate}</Li>
            ))}
          </Ul>
          <Ul className="rightUl">
            <Li>Demographic</Li>
            {requestsDummyData.map((requestDummyData) => (
              <Li key="{requestDummyData.id}">
                {requestDummyData.demographic}
              </Li>
            ))}
          </Ul>
          <Ul className="rightUl">
            <Li>Allegies/Medical Condition</Li>
            {requestsDummyData.map((requestDummyData) => (
              <Li key="{requestDummyData.id}">{requestDummyData.allergies}</Li>
            ))}
          </Ul>
          <Ul className="rightUl">
            <Li>Address</Li>
            {requestsDummyData.map((requestDummyData) => (
              <Li key="{requestDummyData.id}">{requestDummyData.address}</Li>
            ))}
          </Ul>
          <Ul className="rightUl">
            <Li>City</Li>
            {requestsDummyData.map((requestDummyData) => (
              <Li key="{requestDummyData.id}">{requestDummyData.city}</Li>
            ))}
          </Ul>
        </InsideWrapper>
      </Wrapper>
    </div>
  );
};

export default DashboardRightClient;

const Wrapper = styled.div`
  background: rgba(251, 250, 252, 0.6);
  margin: 2rem auto;
  border-radius: 10px;
  padding-bottom: 10px;
  width: 46.3rem;
  text-align: center;
  
`;

const H2 = styled.h2`
  text-align: center;
  padding: 20px 0;
`;

const InsideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: rgba(218, 218, 218, 0.93);
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`;
const Ul = styled.ul`
  border: 1px solid #dadada;
  background: white;
`;

const Li = styled.li`
  padding: 10px;
  border: 1px solid #dadada;
  font-size: 1rem;
`;


