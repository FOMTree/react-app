import styled, { ThemeProvider } from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Title>
        <P>Welcome Back! We Couldn't Do This Without You!</P>
      </Title>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background: ${(props) => props.theme.body};
  padding: 20px 0;
`;

const Title = styled.header`
  background: linear-gradient(
      270deg,
      rgba(201, 255, 228, 0.8) 2.82%,
      rgba(176, 255, 234, 0.8) 52.44%,
      rgba(196, 248, 255, 0.8) 101.04%
    ),
    #c4c4c4;
  text-align: center;
  padding: 0.5rem 0;
`;

const P = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-size: 2rem;
`;