import styled, { css } from "styled-components";

import { fromBottom, shakeHands } from "styles/keyframes/keyframes";

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 1.2;

    margin: 10px auto 0px -3px;

    @media (max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.smallx2};
    }

    @media (max-width: ${theme.media.sm}) {
      font-size: ${theme.font.sizes.small};
      line-height: 1.4;
    }
  `}
`;

export const About = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmallx2};
    font-weight: ${theme.font.light};

    margin: 20px auto 35px 0px;

    em {
      text-decoration: line-through;
      font-style: normal;
    }

    @media (max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.xxsmall};
    }

    @media (max-width: ${theme.media.sm}) {
      font-size: ${theme.font.sizes.xxxsmall};
    }
  `}
`;

export const Welcome = styled.div`
  ${({ theme }) => css`
    h2 {
      font-size: ${theme.font.sizes.xsmallx2};
      font-weight: ${theme.font.medium};

      @media (max-width: ${theme.media.sm}) {
        font-size: ${theme.font.sizes.xxsmallx2};
      }
    }

    svg {
      margin-left: 10px;
      animation-name: ${shakeHands};
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
      transform-origin: 70% 70%;
      display: inline-block;

      @media (max-width: ${theme.media.sm}) {
        width: 23px;
      }
    }

    display: flex;
  `}
`;

export const HomeSection = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 0 2rem;
  z-index: -1;

  &.active {
    ${Name} {
      animation: ${fromBottom} 0.5s ease;
    }

    ${Welcome} {
      animation: ${fromBottom} 0.5s ease;
    }

    ${About} {
      animation: ${fromBottom} 0.7s ease;
    }

    button {
      animation: ${fromBottom} 0.85s ease;
    }
  }
`;

export const ItemsHomeWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 0 4rem;

    @media (max-width: ${theme.media.sm}) {
      padding: 0 1.5rem;
    }
  `}
`;
