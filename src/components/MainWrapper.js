import styled from 'styled-components';
import Notifications from './Notifications';
import Activitylog from "./Activitylog";

function MainWrapper() {
  return (
    <FlexWrapper>
      <Notifications />
      <Activitylog />
    </FlexWrapper>
  );
}

export default MainWrapper; 

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.body};
`; 

