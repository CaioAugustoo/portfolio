import styled, { css } from "styled-components";

// Import keyframes to animate
import {
  fromBottom,
  fadeOpacity,
  fromLeft,
} from "../../styles/keyframes/keyframes";

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

    @media (max-width: ${theme.media.large}) {
      height: 100vh;
    }
  `}
`;

export const ItemsHomeWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    @media (max-width: ${theme.media.small}) {
      margin-top: -30px;
    }
  `}
`;

export const Welcome = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};

    display: block;
    text-align: left;

    margin-right: auto;
    animation: ${fromLeft} 0.4s cubic-bezier(0.16, 1.13, 0.29, 1.37);

    @media (max-width: ${theme.media.small}) {
      font-size: ${theme.font.sizes.smallx2};
    }
  `}
`;

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};

    animation: ${fromLeft} 0.45s cubic-bezier(0.16, 1.13, 0.29, 1.37);

    margin: 10px auto 0px -3px;
    @media (max-width: ${theme.media.small}) {
      font-size: ${theme.font.sizes.mediumx2};
    }
  `}
`;

export const About = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.smallx2};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};

    animation: ${fromBottom} 1s cubic-bezier(0.16, 1.13, 0.29, 1.37);

    margin: 15px auto 0px 0px;
    @media (max-width: ${theme.media.small}) {
      font-size: ${theme.font.sizes.xsmallx2};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};

    color: ${theme.colors.white};
    height: 45px;

    border: none;
    border-radius: 100px;

    margin-right: auto;

    font-size: ${theme.font.sizes.xxsmallx2};
    font-weight: ${theme.font.medium};
    letter-spacing: 1px;

    opacity: 0;

    padding: 0px 35px;
    margin: 40px auto 0 0px;

    animation: ${fadeOpacity} 1s ease forwards;
    transition: all 0.3s ease;

    cursor: pointer;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.03);

    &:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.07);
      transform: translate3d(0px, -3px, 0px);
    }
    @media (max-width: ${theme.media.small}) {
      height: 35px;
      font-size: ${theme.font.sizes.xxsmall};
      padding: 0px 25px;
    }
  `}
`;

export const BackgroundImage = styled.img`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    z-index: -1;
    animation: ${fadeOpacity} 2s ease;
    @media (max-width: ${theme.media.large}) {
      opacity: 0.1;
      height: 100vh;
      animation: none;
    }
  `}
`;

export const HomeLogo = styled.picture`
  ${({ theme }) => css`
    position: absolute;
    z-index: -1;
    right: 0;

    @media (max-width: ${theme.media.small}) {
      opacity: 0.1;

      img {
        height: 100vh;
        width: 250vw;
        object-fit: cover;
      }
    }

    @media (max-width: ${theme.media.large}) {
      opacity: 0.1;
    }
  `}
`;
