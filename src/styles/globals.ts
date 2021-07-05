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

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(""), url("/fonts/poppins-v15-latin-300.woff2") format("woff2");
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(""),
      url("/fonts/poppins-v15-latin-regular.woff2") format("woff2");
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(""), url("/fonts/poppins-v15-latin-500.woff2") format("woff2");
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(""), url("/fonts/poppins-v15-latin-700.woff2") format("woff2");
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
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #10121d;
  }

  ::-webkit-scrollbar-thumb {
    background: #1d2132;
    border-radius: 10px;
  }

  ::selection {
    background-color: #1d2132;
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
