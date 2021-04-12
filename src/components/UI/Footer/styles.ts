import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  padding: 30px 0px;
  text-align: center;
  background-color: #0b0e18;
  margin: 15rem auto 0 auto;
`;

export const Links = styled.nav`
  ${({ theme }) => css`
    a {
      font-size: 1.5rem;
      cursor: pointer;
      color: ${theme.colors.white};

      &:hover {
        text-decoration: underline;
      }
    }
  `}
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
