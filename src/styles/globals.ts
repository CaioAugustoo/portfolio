import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme/theme";

// Resets
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 62.5%;
  }
  body, button {
    transition: all .3s ease;
    font-family: 'Montserrat', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    overflow-x: hidden !important;
  }
  ul li {
    list-style: none;
  }
  a { 
    text-decoration: none;
    color: ${theme.colors.black}
  }
  
  a, 
  h1, 
  p, 
  h2,
  h3 {
    transition: all .3s ease;
  }
  header {
    transition: all .3s ease;
  }
  body.dark-mode, 
  body.dark-mode header, 
  body.dark-mode #hmocIu  {
    background-color: #1a1919;
    color: #ffffff;
    a, 
    h1, 
    p, 
    li, 
    h2,
    h3 {
      color: #ffffff;
    }
  }
`;
export default GlobalStyles;

// Styles
export const Container = styled.div`
  max-width: 120rem;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;
  @media (max-width: ${theme.media.small}) {
    padding: 0 2rem;
  }
`;