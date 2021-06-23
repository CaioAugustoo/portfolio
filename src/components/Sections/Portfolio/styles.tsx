import styled, { css } from "styled-components";
import { fromBottom } from "styles/keyframes/keyframes";

export const Wrapper = styled.section`
  height: auto;
  max-width: 125rem;
  margin: 0 auto;
  padding: 10rem 3rem;
  transition: all 0.3s ease;

  &.active > div > * {
    animation: ${fromBottom} 0.5s forwards;
  }
`;

export const ReposLink = styled.a`
  ${({ theme }) => css`
    display: block;
    text-align: center;

    font-size: ${theme.font.sizes.xxxsmall2};
    color: ${theme.colors.secondary};
    text-decoration: underline;

    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.white};
    }
  `}
`;
