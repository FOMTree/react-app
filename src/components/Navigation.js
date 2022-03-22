import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faBell } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";
import Dashboard from "./Dashboard";
// import Respondants from "./Respondants";
// import Inventory from "./Inventory";
// import Donation from "./Donation";
// import App from "./App";


function Navigation() {

  const [theme, setTheme] = useState("light");

  const themeTogggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Nav>
          {/* Left  */}
          <Logo className="logo">
            <LogoImg src={require("../assets/logo.png")} alt="FOMTree logo" />
          </Logo>
          {/* Middle */}
          <Menu>
            <Li>
              <Link to="/">
                <P>Home</P>
              </Link>
            </Li>
            <LiB>
              <Link to="/dashboard">
                <P>Dashboard</P>
              </Link>
            </LiB>
            <LiC>
              <Link to="/respondants">
                <P>Respondents</P>
              </Link>
            </LiC>
            <LiD>
              <Link to="/inventory">
                <P>Inventory</P>
              </Link>
            </LiD>
            <LiE>
              <Link to="/donation">
                <P>Donation</P>
              </Link>
            </LiE>
          </Menu>

          {/* Right */}
          <Container className="nav-right">
            <Bg onClick={() => themeTogggler()}>
              <div className="nomal">
                <Span>🌜</Span>
              </div>
              <div className="dark">
                <Span>🌞</Span>
              </div>
              <Dot className="dot" id="dot"></Dot>
            </Bg>
            <Bell>
              <FontAwesomeIcon icon={faBell} />
            </Bell>
            <Notify>
              <FontAwesomeIcon icon={faExclamationCircle} />
            </Notify>
            <label htmlFor=""></label>
            <Select name="" id="">
              <Option value="0">UserName</Option>
              <Option value="1">User1</Option>
              <Option value="2">User2</Option>
              <Option value="3">User3</Option>
            </Select>
          </Container>
        </Nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/respondants" element={<Respondants />} /> */}
          {/* <Route path="/inventory" element={<Inventory />} /> */}
          {/* <Route path="/donation" element={<Donation />} /> */}
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default Navigation;


const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  backgroun-color: #fafbfc;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

const Logo = styled.div`
  display: block;
  margin: auto;
`;

const LogoImg = styled.img`
  width: 50px;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const Li = styled.li`
text-align: center;
border-right: 1px solid #dadada;
border-left: 1px solid #dadada;

&:hover,
&:focus {
  background: #aaa8a8;
}
`;

const LiB = styled.li`
text-align: center;
border-right: 1px solid #dadada;

&:hover {
  background: #60b68b;
}
`;

const LiC = styled.li`
text-align: center;
border-right: 1px solid #dadada;

&:hover {
  background: #92e2d7;
}
`;

const LiD = styled.li`
text-align: center;
border-right: 1px solid #dadada;

&:hover {
  background: #60a1aa;
}
`;

const LiE = styled.li`
  text-align: center;
  border-right: 1px solid #dadada;

  &:hover {
    background: #3a6888;
    color: white;
  }
`;

const P = styled.p`
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => props.theme.fontColor};
  padding: 20px 30px;
  &:hover,
  &:focus {
    color: white;
  }
`;

// Right
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px 20px 0;
`

const Bg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  background-color: gray;
  padding: 3px 4px;
  border-radius: 30px;
  height: 30px;
  transition: 0.2s;
  width: 60px;
  margin-left: 1rem;
`;

const Span = styled.span`
  font-size: 1.5rem;
`;

const Dot = styled.div`
  background-color: #fafafa;
  border: 1px solid #4d4d4d;
  border-radius: 50%;
  height: 27px;
  left: 1px;
  position: absolute;
  top: 1px;
  transition: 0.25s;
  width: 28px;
  &:active {
    box-shadow: 0 0 2px 3px #7a77ff;
  }
  &:focus {
    box-shadow: 0 0 2px 3px #7a77ff;
  }
  &:hover {
    box-shadow: 0 0 2px 3px #7a77ff;
  }
`;

const Bell = styled.div`
  background-color: gray;
  border-radius: 100%;
  padding: 3px 7px;
  color: white;
  margin: 0 10px 0 5px;
`;

const Notify = styled.div`
  position: relative;
  right: 20px;
  top: -6px;
  color: red;
`;

const Select = styled.select`
  color: #fafbfc;
  background-color: gray;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 20px;
  font-size: 1rem;
  padding: 3px 7px;
  letter-spacing: 1px;
  font-weight: nomal;
`;

const Option = styled.option`
  color: #fafbfc;
  font-size: 1rem;
`;  


// dark mode settings here


