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

export const AboutTexts = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};

    margin: 30px auto;

    span {
      color: ${theme.colors.secondary};
    }

    a {
      color: ${theme.colors.secondary};

      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.xxxsmall};
    }
  `}
`;
