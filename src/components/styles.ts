import styled from 'styled-components';

// Import colors
import { theme } from '../style/theme/themes'

// Import keyframes to animate
import { fadeOut, fromBottom, fadeOutMobie, fadeOpacity, fromLeft } from '../style/keyframes/keyframes'

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

  background: ${theme.colors.white};

  animation: ${fadeOut} 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  animation-delay: .1s;

  img {
    cursor: pointer;
  }

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

  background: ${theme.colors.white};
  z-index: -1;

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
        animation-delay: .4s;
      }
      &:nth-child(2) {
        animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both ;
        animation-delay: .5s;
      }
      &:last-child {
        animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both ;
        animation-delay: .6s;
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

export const HomeSection = styled.section`
  height: 100vh;
  width: 100%;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  z-index: -1;
`;

export const Welcome = styled.h2`
  font-weight: normal;
  font-size: 2.5rem;
  color: ${theme.colors.black};

  display: block;
  text-align: left;
  margin-right: auto;

  animation: ${fromLeft} .4s cubic-bezier(0.16, 1.13, 0.29, 1.37);

  @media(max-width: ${theme.media.small}) {
    font-size: 2rem;
  }
`;

export const Name = styled.h1`
  font-size: 6.5rem;
  color: ${theme.colors.black};

  animation: ${fromLeft} .45s cubic-bezier(0.16, 1.13, 0.29, 1.37);

  margin: 10px auto 0px -3px;

  @media(max-width: ${theme.media.small}) {
    font-size: 3.7rem;
  }
`;

export const About = styled.p`
  font-size: 1.9rem;
  font-weight: 400;
  color: ${theme.colors.black};

  animation: ${fromBottom} 1s cubic-bezier(0.16, 1.13, 0.29, 1.37);

  margin: 15px auto 0px 0px;

  @media(max-width: ${theme.media.small}) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  background: #0185b2;
  a {
    color: ${theme.colors.white};
  }


  height: 45px;
 
  border: none;
  border-radius: 100px;

  margin-right: auto;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 1px;

  opacity: 0;

  padding: 0px 35px;
  margin: 40px auto 0 0px;

  animation: ${fadeOpacity} 1s ease forwards;

  cursor: pointer;
  transition: all .3s ease;

  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.03);

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.07);
    transform: translate3d(0px, -3px, 0px);
  }

  @media(max-width: ${theme.media.small}) {
    height: 35px;
    font-size: 1rem;
    padding: 0px 25px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  z-index: -1;

  animation: ${fadeOpacity} 2s ease;

  @media(max-width: ${theme.media.large}) {
    opacity: 0.1;
    height: 100vh;
    animation: none;
  }
`;