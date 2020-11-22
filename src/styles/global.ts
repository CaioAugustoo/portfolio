import styled, { createGlobalStyle } from 'styled-components';

// Resets
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  :root {
    font-size: 62.5%;
  }
  body {
    font-family: 'Montserrat', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;
export default GlobalStyles;

// Styles
export const Container = styled.div`
  max-width: 120rem;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;
`;