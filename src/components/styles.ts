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

export const Nav = styled.nav`
  @media(max-width: 1400px) and (min-width: 600px){
    margin-right: 10rem;
  }

  @media(max-width: ${theme.media.small}) {
    display: none;
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

  color: ${theme.colors.black};
  opacity: 0.9;

 a {
  transition: all .2s ease;
  &:hover {
    color: #0185b2;
    opacity: 0.9;
  }
  &.active {
    color: #0185b2;
  }
 };

  /* Animations for each item */
  &:first-child {
    animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    animation-delay: .2s;
  }
  &:nth-child(2) {
    animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    animation-delay: .3s;
  }
  &:nth-child(3) {
    animation: ${fromBottom} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
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

    width: 2.0rem;
    height: 3px;

    transition: all .3s ease;

    background: ${theme.colors.blue};
    
    border-radius: 0.125rem;
    box-shadow: 0 6px ${theme.colors.blue},0 -6px ${theme.colors.blue}
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
      &:nth-child(3) {
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

  &:nth-child(4) {
    text-align: left;
    position: absolute;
    left: 50%;
    top: 90%;
    
    div {
      right: 0;
      position: initial;
    }
  }
`

export const HomeSection = styled.section`
  height: 100vh;
  width: 100%;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 0 2rem;

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
  font-size: 8rem;
  color: ${theme.colors.black};

  animation: ${fromLeft} .45s cubic-bezier(0.16, 1.13, 0.29, 1.37);

  margin: 10px auto 0px -3px;

  @media(max-width: ${theme.media.small}) {
    font-size: 3.7rem;
  }
`;

export const About = styled.p`
  font-size: 2rem;
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
  color: ${theme.colors.white};

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

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.black};
  text-align: center;

  margin-bottom: 70px;

  display: block;

  &:before {
    content: '';
    display: block;
    margin: 0 auto;

    width: 5px;
    height: 27px;

    position: relative;
    top: 29px;
    z-index: -1;
    left: -90px;

    transform: rotate(-5deg);

    background: ${theme.colors.blue};

    @media(max-width: ${theme.media.small}) {
      width: 4px;
      height: 23px;
      top: 24px;
      left: -75px;
    }
  }

  @media(max-width: ${theme.media.small}) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const AboutSection = styled.section`
  height: auto;
  padding-top: 100px;
`;

export const AboutTexts = styled.p`
  font-size: 1.7rem;
  line-height: 1.7;
  color: ${theme.colors.black};
  text-align: center;

  margin: 30px auto;
  padding: 0 30px;

  max-width: 1000px;

  span {
    color: #0185b2;
    font-weight: 600;
    font-style: italic;
  }

  @media(max-width: ${theme.media.small}) {
    font-size: 1.5rem;
    padding: 0px;
  }
`;

export const ScrollTop = styled.button`
  background: #0185b2;

  position: fixed;
  right: 15px;
  bottom: 30px;
  padding: 8px 9px;

  border: none;
  outline: none;
  border-radius: 100px;

  cursor: pointer;

  opacity: 0;
  transition: all .4s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.1);
    transform: translate3d(0px, -3px, 0px);
  }
`;

export const ScrollDownArrow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0.825rem;

  display: flex;
  margin-bottom: 1.25rem;

  cursor: pointer;

  img { 
    width: 17px;
  }
`;

export const StacksWrapper = styled.div`
  padding: 0 30px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StackItem = styled.div`
  display: flex;
  margin: 50px 10px 20px 10px;

  transition: all .3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const Stacks = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;
  color: ${theme.colors.black};
  text-align: center;
  
  max-width: 800px;

  margin: 30px auto;
  padding: 0 30px;

  span {
    color: #0185b2;
    font-weight: 600;
    font-style: italic;
  }

  @media(max-width: ${theme.media.small}) {
    padding: 0;
    font-size: 1.4rem;
  }
`;

export const ButtonDarkTheme = styled.div`
  position: absolute;
  overflow: hidden;
  top: 53%;
  right: -20px;
  transform: translate3d(-50%, -50%, 0);
  animation-name: logoOpacity;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

export const Input = styled.input`
  position: absolute;
  left: -99em;
  
  &:checked {
  + .toggle {
    background-color: #0185b2;
  
    &:before {
      color: #0185b2;
    }
    &:after {
      color: #ffffff;
    }
    
    .toggle__handler {
      background-color: #FFE5B5;
      transform: translate3d(38px, 0, 0) rotate(0) scale(0.85);
      
      .crater { opacity: 1; }
    }
    .star--1 {
      width: 2px;
      height: 2px;
    }
    
    .star--2 {
      width: 4px;
      height: 4px;
      transform: translate3d(-5px, 0, 0);
    }
    
    .star--3 {
      width: 2px;
      height: 2px;
      transform: translate3d(-7px, 0, 0);
    }
    
    .star--4,
    .star--5,
    .star--6 {
      opacity: 1;
      transform: translate3d(0,0,0);
    }
    .star--4 {
      transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .star--5 {
      transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .star--6 {
      transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }
}
`;

export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 90px;
  height: 45px;
  background-color: #0185b2;
  border-radius: 90px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: scale(0.4);
  .star {
    position: absolute;
    background-color: #ffffff;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;
  }
  .star--1 {
    top: 10px;
    left: 35px;
    z-index: 0;
    width: 30px;
    height: 3px;
  }
  .star--2 {
    top: 18px;
    left: 28px;
    z-index: 1;
    width: 30px;
    height: 3px;
  }
  .star--3 {
    top: 27px;
    left: 40px;
    z-index: 0;
    width: 30px;
    height: 3px;
  }
  .star--4,
  .star--5,
  .star--6 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  .star--4 {
    top: 16px;
    left: 11px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }
  .star--5 {
    top: 32px;
    left: 17px;
    z-index: 0;
    width: 3px;
    height: 3px;
    transform: translate3d(3px, 0, 0);
  }
  .star--6 {
    top: 36px;
    left: 28px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }
`;

export const Span = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  left: 3px;
  width: 45px;
  height: 45px;
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg) scale(0.87);
  
  .crater {
    position: absolute;
    background-color: #e8cda5;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
  }
  .crater--1 {
    top: 18px;
    left: 10px;
    width: 4px;
    height: 4px;
  }
  .crater--2 {
    top: 28px;
    left: 22px;
    width: 6px;
    height: 6px;
  }
  .crater--3 {
    top: 10px;
    left: 25px;
    width: 8px;
    height: 8px;
  }
`;

export const PortfolioItem = styled.div`
  margin: 0px 0px;
  opacity: 0.5;
  transition: all .3s ease;

  @media(max-width: 1025px) {
    opacity: 1;
    margin: 20px 0px;
  }

  &.active {
    opacity: 1;
    transform: scale(1.02);
    img {
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
    }
    
  }
`;

export const PortfolioItemWrapper = styled.div`
  display: flex;
  flex-shrink: 0;

  transition: all .3s ease;

  @media(max-width: 1025px) {
    overflow: auto;

    flex-wrap: wrap;
    justify-content: center;

    margin-top: 30px;
  }
`;

export const ItemAbout = styled.div`
  max-width: 47.5rem;

  padding: 2.5rem;
  margin: 0 auto;

  text-align: center;
`;

export const ItemTitle = styled.h3`
  margin-bottom: 1.25rem;

  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.black};


  @media(max-width: 950px) {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
`;

export const ItemDescription = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${theme.colors.black};

  line-height: 1.7;
  margin-bottom: 2.25rem;

  @media(max-width: 950px) {
    font-size: 1.2rem;
  }
`;

export const ItemVisit = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;

  letter-spacing: 0.5px;
  margin: 30px 0px 58px 0px;

  cursor: pointer;
  transition: all .3s ease;

  display: flex;
  justify-content: space-between;

  a {
    color: ${theme.colors.black};

    &:hover {
      color: ${theme.colors.blue};
    }
  }
`;

export const ItemImage = styled.img`
  border-radius: 5px;
  margin: 0 15px;

  transition: all .3s ease;
  
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05),0 4px 6px -2px rgba(0,0,0,0.05);

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
    transform: scale(1.02);
  }

  @media(max-width: 1024px) and (min-width: 300px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const PortfolioSection = styled.section`
  height: auto;
  padding-top: 100px;
`;