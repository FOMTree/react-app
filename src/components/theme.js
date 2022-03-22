import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#e5e5e5",
  fontColor: "#000",
  bg: "#ffffff",
};

export const darkTheme = {
  body: "#3B3B3B",
  fontColor: "#ffffff",
  bg: "#000000",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }

  color {
    color: ${(props) => props.theme.fontColor};
  }

  nav {
    background-color: ${(props) => props.theme.bg};
  } 
  
  .notifications, .activitylog, .left {
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fontColor};
  }

  .right, .weekly, .rightUl {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }

`;