import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  padding: 30px 0px;
  text-align: center;
  background-color: #0B0E18;
  margin: 15rem auto 0 auto;
`;

export const Links = styled.nav`
  a {
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: center;

  li {
    margin: 10px;
  }
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall2};
  `}
`;
