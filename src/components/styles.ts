import styled from 'styled-components';

// Import colors
import { theme } from '../style/theme/themes'

// Import keyframes to animate
import { fadeOut, fromBottom, fadeOutMobie } from '../style/keyframes/keyframes'

export const Header = styled.header`
  width: 100%;
  height: 7rem;

  display: flex;
  align-items: center;

  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  z-index: 2;

  position: fixed;
  left: 0;
  top: 0;

  animation: ${fadeOut} 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  animation-delay: .1s;

  @media(max-width: ${theme.media.large}) {
    height: 6rem;
    animation: ${fadeOutMobie} 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  }
`;

export const ItensWrapper = styled.div`
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
  margin-left: 35px;
  cursor: pointer;
  
  font-size: 1.2rem;
  font-weight: 700;

  transition: all .2s ease;

  color: ${theme.colors.black};
  opacity: 0.9;


  &:hover {
    color: ${theme.colors.blue};
    opacity: 0.9;
  }

  /* Animations for each item */
  &:first-child {
    animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both ;
    animation-delay: .2s;
  }
  &:nth-child(2) {
    animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both ;
    animation-delay: .3s;
  }
  &:last-child {
    animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both ;
    animation-delay: .4s;
  }
  
  @media(max-width: ${theme.media.small}) {
    display: none;
  }
`;

export const HambIcon = styled.button`
  border: 1px solid transparent;

  cursor: pointer;
  background: transparent;
  display: none;

  z-index: 100;

  &:after {
    content: '';
    display: block;

    width: 2.1rem;
    height: 3px;

    transition: all .3s ease;

    background: ${theme.colors.blue};
    
    border-radius: 0.125rem;
    box-shadow: 0 7px ${theme.colors.blue},0 -7px ${theme.colors.blue}
  }

  &:before {
    content: '';
    display: none;

    width: 2.1rem;
    height: 3px;

    transition: all .3s ease;

    background: ${theme.colors.blue};
    
    border-radius: 0.125rem;
    box-shadow: 0 7px ${theme.colors.blue},0 -7px ${theme.colors.blue}
  }

  @media(max-width: ${theme.media.small}) {
    display: block;
  }

  &.menu_active {
    &:after {
      transform: rotate(45deg);
      box-shadow: 0 0 0px ${theme.colors.blue};
    }
    &:before {
      position: absolute;
      display: block;
      transform: rotate(-45deg);
      box-shadow: 0 0 0 0px ${theme.colors.blue};
    }
  }
`;

export const MobileWrapper = styled.div`
  width: 100%;
  height: 100vh;
  
  position: absolute;
  left: 0;
  top: 0;

  transition: all .4s cubic-bezier(0.38, 0.91, 0.49, 1.1);

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate3d(-600px, 0, 0);
  opacity: 0;

  @media(min-width: ${theme.media.small}) {
    display: none;
  }

  &.menu_active {
    transform: translate3d(0, 0, 0);
    opacity: 1;

    ul li {
      /* Animations for each item */
      &:first-child {
        animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both ;
        animation-delay: .3s;
      }
      &:nth-child(2) {
        animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both ;
        animation-delay: .4s;
      }
      &:last-child {
        animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both ;
        animation-delay: .5s;
      }
    }
  }
`;

export const MobileItens = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MobileItem = styled.li`
  margin: 20px 0;

  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;

  color: ${theme.colors.black};
  opacity: 0.8;
`