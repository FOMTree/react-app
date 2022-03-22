import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faUtensils, faUserPlus, faHandHoldingHeart, faChartLine } from "@fortawesome/free-solid-svg-icons";


function Activitylog() {
  return (
    <Wrapper className="activitylog">
      <H2>ACTIVITY　LOG</H2>
      <Select name="" id="">
        <option value="0">Today</option>
        <option value="1">1 day ago</option>
        <option value="2">2days ago</option>
      </Select>
      <Container className="container">
        <WrapperFlex className="data-reports box">
          <Icon className="icon">
            <p>
              <FontAwesomeIcon icon={faSeedling} />
            </p>
          </Icon>
          <InsideFlex className="inside-box">
            <P>
              Tomato has been added.
            </P>
            <P>Carrot has been added.</P>
          </InsideFlex>
        </WrapperFlex>

        <WrapperFlex className="data-reports box">
          <IconB className="icon">
            <p>
              <FontAwesomeIcon icon={faUtensils} />
            </p>
          </IconB>
          <InsideFlex className="inside-box">
            <P>Chickpea has been added.</P>
          </InsideFlex>
        </WrapperFlex>

        <WrapperFlex className="data-reports box">
          <IconC className="icon">
            <p>
              <FontAwesomeIcon icon={faUserPlus} />
            </p>
          </IconC>
          <InsideFlex className="inside-box">
            <P>New respondent has been created.</P>
          </InsideFlex>
        </WrapperFlex>

        <WrapperFlex className="data-reports box">
          <IconD className="icon">
            <p>
              <FontAwesomeIcon icon={faHandHoldingHeart} />
            </p>
          </IconD>
          <InsideFlex className="inside-box">
            <P>Toilet paper has been donated.</P>
          </InsideFlex>
        </WrapperFlex>

        <WrapperFlex className="data-reports box">
          <IconE className="icon">
            <p>
              <FontAwesomeIcon icon={faChartLine} />
            </p>

          </IconE>
          <InsideFlex className="inside-box">
            <P>New dara and about DATA STUFF.</P>
          </InsideFlex>
        </WrapperFlex>
      </Container>
    </Wrapper>
  );
};

export default Activitylog;


const Wrapper = styled.div`
  background: ${(props) => props.theme.bg};
  width: 46%;
  height: 70vh;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 1rem 0;
  margin-bottom: 5rem;
`;

const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 13px;
  margin: 17px;
`;

const H2 = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  text-align: center;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid #dadada;
  margin-bottom: 1.7rem;
`;

const Select = styled.select`
  width: 100px;
  background: #f2f2f2;
  border-radius: 6px;
  border: 1px solid rgba(37, 37, 37, 0.15);
  position: relative;
  top: -70px;
  right: -500px;
`;

const WrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #dadada;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const InsideFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Icon = styled.div`
  background: #60a1aa;
  width: 50px;
  color: white;
  padding: 10px 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const IconB = styled.div`
  background: #60a1aa;
  width: 50px;
  color: white;
  padding: 10px 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const IconC = styled.div`
  background: #88dbc5;
  color: white;
  width: 50px;
  padding: 10px 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const IconD = styled.div`
  background: #3a6888;
  color: white;
  width: 50px;
  padding: 10px 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const IconE = styled.div`
  background: #60b68b;
  color: white;
  width: 50px;
  padding: 10px 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const P = styled.p`
  font-size: 0.8rem;
`;