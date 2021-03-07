import styled, { createGlobalStyle, css } from "styled-components";

// Resets
const GlobalStyles = createGlobalStyle`
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
  ${({theme}) => css`
    body.dark-mode,
    body.dark-mode header,
    body.dark-mode #hmocIu  {
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      a,
      h1,
      p,
      li,
      h2,
      h3 {
        color: ${theme.colors.white};
      }
    }
    body, button {
      transition: all .3s ease;
      font-family: ${theme.font.family}
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
  `}


`;
export default GlobalStyles;

// Styles
export const Container = styled.div`
  ${({theme}) => css`
    max-width: 120rem;
    padding: 0 4rem;
    margin: 0 auto;
    width: 100%;

    @media (max-width: ${theme.media.small}) {
      padding: 0 2rem;
    }
  `}
`;
