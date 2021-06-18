import styled, { createGlobalStyle, css } from "styled-components";

// Resets
const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${theme.colors.mainbg};
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #10121D;
  }

  ::-webkit-scrollbar-thumb {
    background: #1D2132;
    border-radius: 10px;
  }

  ::selection {
    background-color: #1D2132;
  }
`}
`;
export default GlobalStyles;

// Styles
export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 150rem;
    padding: 0 3rem;
    margin: 0 auto;
    width: 100%;

    @media (max-width: ${theme.media.sm}) {
      padding: 0 3.5rem;
    }
  `}
`;
