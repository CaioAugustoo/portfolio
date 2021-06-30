import styled, { css } from "styled-components";
import { fromBottom } from "styles/keyframes/keyframes";

export const AboutSection = styled.section`
  ${({ theme }) => css`
    height: auto;
    padding: 12rem 0;
    max-width: 125rem;
    margin: 0 auto;

    &.active div p {
      animation: ${fromBottom} 0.7s ease;
    }

    @media (max-width: ${theme.media.md}) {
      padding: 9rem 0px;
    }
  `}
`;

export const AboutTexts = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmallx2};
    font-weight: ${theme.font.light};

    p {
      margin: 30px auto;
    }

    u {
      color: ${theme.colors.secondary};
      text-decoration: none;
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: underline;
      transition: all 0.2s;

      &:hover {
        color: ${theme.colors.white};
      }
    }

    @media (max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.xxxsmall};
    }
  `}
`;
