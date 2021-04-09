import styled, { css } from "styled-components";

import {
  fromBottom
} from "styles/keyframes/keyframes";

export const HomeSection = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    padding: 0 2rem;
    z-index: -1;

    button {
      animation: ${fromBottom} 0.85s ease;
    }
  `}
`;

export const ItemsHomeWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 0 4rem;

    @media(max-width: ${theme.media.sm}) {
      padding: 0 1.5rem;
    }
  `}
`;

export const Welcome = styled.h2`
  ${({ theme }) => css`
    font-size:${theme.font.sizes.xsmallx2};
    font-weight: ${theme.font.medium};

    display: block;
    text-align: left;

    margin-right: auto;
    animation: ${fromBottom} 0.5s ease;

    @media(max-width: ${theme.media.sm}) {
      font-size: ${theme.font.sizes.xxsmallx2};
    }
  `}
`;

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 1.2;

    animation: ${fromBottom} 0.5s ease;

    margin: 10px auto 0px -3px;

    @media(max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.smallx2};
    }

    @media(max-width: ${theme.media.sm}) {
      font-size: ${theme.font.sizes.small};
      line-height: 1.4;
    }
  `}
`;

export const About = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmallx2};
    font-weight: ${theme.font.light};

    animation: ${fromBottom} 0.7s ease;

    margin: 20px auto 35px 0px;

    @media(max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.xxsmall};
    }

    @media(max-width: ${theme.media.sm}) {
      font-size: ${theme.font.sizes.xxxsmall};
    }
  `}
`;
