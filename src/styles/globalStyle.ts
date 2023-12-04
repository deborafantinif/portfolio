import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body, input, button, a {
    font-family: "Poppins", sans-serif;
    color: #666666;
  }

  h1, h2 {
    color: #42446E;
  }

  body {
    background-color: #FAFAFA;
  }
`;