import styled, { css } from "styled-components";

// Import keyframes to animate
import {
  fadeOut,
  fromBottom,
  mobileItens,
} from "styles/keyframes/keyframes";

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 7rem;

    display: flex;
    align-items: center;
    z-index: 2;

    position: fixed;
    left: 0;
    top: 0;

    background: ${theme.colors.mainbg};

    animation: ${fadeOut} 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    animation-delay: 0.1s;

    img {
      cursor: pointer;
    }
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
  `}
`;

export const ItensWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`;

export const NavItens = styled.ul`
  display: flex;
  align-items: center;
  transition: transform 0.5s cubic-bezier(0.63, 0.01, 0.23, 1.01) 0s;
`;

export const NavItem = styled.li`
  ${({ theme }) => css`
    margin-left: 35px;

    cursor: pointer;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xxxsmall};

    opacity: 0.9;

    a {
      transition: all 0.2s ease;

      &:hover {
        color: ${theme.colors.primary};
        opacity: 0.9;
      }
    }
    /* Animations for each item */
    &:first-child {
      animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
      animation-delay: 0.2s;
    }
    &:nth-child(2) {
      animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
      animation-delay: 0.4s;
    }
  `}
`;

export const HambIcon = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: none;
    background: transparent;

    position: relative;
    top: -8px;

    border-radius: 100px;
    transition: all 0.3s ease;

    width: 18px;
    height: 3px;

    background: ${theme.colors.primary};
    z-index: 100;

    &:after {
      content: "";
      display: block;

      width: 18px;
      height: 3px;

      position: relative;
      top: 3px;

      border-radius: 100px;
      transition: all 0.3s ease;
      background: ${theme.colors.primary};
    }
    &:before {
      content: "";
      display: block;

      width: 18px;
      height: 3px;

      position: relative;
      top: 12px;
      border-radius: 100px;

      transition: all 0.3s ease;
      background: ${theme.colors.primary};
    }
    &.menu_active {
      background: transparent;
      &:after {
        transform: rotate(45deg);
        top: 5px;
      }
      &:before {
        transform: rotate(-45deg);
        top: 8px;
      }
    }
  `}
`;

export const MobileWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    position: fixed;
    left: 0;
    top: 0;

    transition: all 0.4s cubic-bezier(0.38, 0.91, 0.49, 1.1);

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translate3d(-600px, 0, 0);
    opacity: 0;
    background: ${theme.colors.white};

    z-index: -1;
    &.menu_active {
      transform: translate3d(0, 0, 0);
      opacity: 1;
      ul li {
        /* Animations for each item */
        &:first-child {
          animation: ${mobileItens} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            both;
          animation-delay: 0.4s;
        }
        &:nth-child(2) {
          animation: ${mobileItens} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            both;
          animation-delay: 0.5s;
        }
        &:nth-child(3) {
          animation: ${mobileItens} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            both;
          animation-delay: 0.6s;
        }
      }
    }
  `}
`;

export const MobileItens = styled.ul`
  display: inline-block;
`;

export const MobileItem = styled.li`
  ${({ theme }) => css`
    margin: 40px 0;

    font-size: ${theme.font.sizes.xsmallx2};
    text-align: center;
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    opacity: 0.8;

    &:nth-child(4) {
      text-align: left;

      position: absolute;

      left: 50%;
      top: 70%;
      div {
        right: 0;
        position: initial;
      }
    }
  `}
`;
