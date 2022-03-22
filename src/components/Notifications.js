import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faBell, faChartLine, faFill, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

function Notifications() {
  return (
    <Wrapper className="notifications">
      <H2>
        <SpanN>
          <FontAwesomeIcon icon={faExclamationCircle} />
        </SpanN>
        NEW NOTIFICATIONS
      </H2>
      <Container className="container">
        <WrapperFlex className="data-reports box">
          <Icon className="icon">
            <p>
              <FontAwesomeIcon icon={faBell} />
            </p>
            <Count>1</Count>
          </Icon>
          <InsideFlex className="inside-box">
            <P>
              <Span>
                <FontAwesomeIcon icon={faChartLine} />
              </Span>
              Data Reports
            </P>
            <P>Check August Status</P>
          </InsideFlex>
        </WrapperFlex>

        <WrapperFlex className="data-reports box">
          <IconB className="icon">
            <p>
              <FontAwesomeIcon icon={faBell} />
            </p>
            <Count>1</Count>
          </IconB>
          <InsideFlex className="inside-box">
            <P>
              <Span>
                <FontAwesomeIcon icon={faUserCircle} />
              </Span>
              Client Request
            </P>
            <P>1 Client request needs confirmation</P>
          </InsideFlex>
        </WrapperFlex>

        <WrapperFlex className="data-reports box">
          <IconC className="icon">
            <p>
              <FontAwesomeIcon icon={faBell} />
            </p>
            <Count>0</Count>
          </IconC>
          <InsideFlex className="inside-box">
            <P>
              <Span>
                <FontAwesomeIcon icon={faFill} />
              </Span>
              Low Inventory
            </P>
            <P>0 Irems are running low</P>
          </InsideFlex>
        </WrapperFlex>

        <WrapperFlex className="data-reports box">
          <IconD className="icon">
            <p>
              <FontAwesomeIcon icon={faBell} />
            </p>
            <Count>3</Count>
          </IconD>
          <InsideFlex className="inside-box">
            <P>
              <Span>
                <FontAwesomeIcon icon={faHeartbeat} />
              </Span>
              Donation Requests
            </P>
            <P>3 Donation Request to be accepted.</P>
          </InsideFlex>
        </WrapperFlex>
      </Container>
    </Wrapper>
  );
}

export default Notifications


const Wrapper = styled.div`
  background: white;
  width: 46%;
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

const SpanN = styled.span`
  color: red;
  margin-right: 1rem;
`;

const WrapperFlex = styled.div`
  background: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: row;
  border: 1px solid #dadada;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 15px;
  &:nth-child(4) {
    margin-bottom: 0;
  }
`;

const InsideFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Count = styled.p`
  font-size: 0.8rem;
  margin: 0.35rem;
`;

const P = styled.p`
  padding: 1rem;
  font-size: 0.8rem;
  border-right: 1px solid #dadada;
  width: 200px;

    &:nth-child(2) {
      border-right: none;
      width: 250px;
      padding-top: 20px;
    }
`;

const Icon = styled.div`
  background: #60b68b;
  color: white;
  padding: 5px 7px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const IconB = styled.div`
  background: #88dbc5;
  color: white;
  padding: 5px 7px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const IconC = styled.div`
  background: #60a1aa;
  color: white;
  padding: 5px 7px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const IconD = styled.div`
  background: #3a6888;
  color: white;
  padding: 5px 7px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const Span = styled.span`
  color: #0873d7;
  font-size: 1.7rem;
  margin-right: 1rem;
`;