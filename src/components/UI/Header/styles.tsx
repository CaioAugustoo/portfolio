import styled, { css } from "styled-components";

import {
  fromBottom,
  mobileItens,
} from "styles/keyframes/keyframes";

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 8rem;

    display: flex;
    align-items: center;
    z-index: 2;

    position: fixed;
    left: 0;
    top: 0;

    background: ${theme.colors.mainbg};
    opacity: 0.99;

    img {
      cursor: pointer;
    }

    @media(max-width: ${theme.media.md}) {
      height: 6.5rem;
      opacity: 1;
    }
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    @media(max-width: ${theme.media.sm}) {
      display: none;
    }
  `}
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      color: ${theme.colors.white};

        &::after {
          transition: all .3s ease;
          content: '';
          display: block;
          position: absolute;
          height: 4px;
          width: 0%;
          background-color: ${theme.colors.secondary};
          bottom: -27px;

          @media(max-width: ${theme.media.md}) {
            bottom: -20px;
          }
        }

      &:hover {
        color: ${theme.colors.primary};
      }

      &.active, &.active::after {
        width: 100%;
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
    &:nth-child(4) {
      animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
      animation-delay: 0.5s;
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

    background: ${theme.colors.secondary};
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
      background: ${theme.colors.secondary};
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
      background: ${theme.colors.secondary};
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

    @media (max-width: ${theme.media.sm}) {
      display: block;
    }
  `}
`;

export const MobileWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: none;

    position: fixed;
    left: 0;
    top: 0;

    transition: all 0.4s cubic-bezier(0.38, 0.91, 0.49, 1.1);

    align-items: center;
    justify-content: center;

    transform: translate3d(-600px, 0, 0);
    opacity: 0;
    background: ${theme.colors.mainbg};

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
        &:nth-child(4) {
          animation: ${mobileItens} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            both;
          animation-delay: 0.7s;
        }
      }
    }

    @media (max-width: ${theme.media.sm}) {
      display: flex;
    }
  `}
`;

export const MobileItems = styled.ul`
  display: inline-block;
`;

export const MobileItem = styled.li`
  ${({ theme }) => css`
    margin: 40px 0;
    text-transform: uppercase;

    a {
      color: ${theme.colors.white};
    }

    font-size: ${theme.font.sizes.xxxsmall};
    text-align: center;
    font-weight: ${theme.font.medium};
    opacity: 0.8;
  `}
`;
