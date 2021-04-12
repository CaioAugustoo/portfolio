import { keyframes } from "styled-components";

export const shakeHands = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`

export const fromBottom = keyframes`
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;


export const mobileItens = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  50% {
    transform: translateX(0px);
    opacity: 1;
  } 70% {
    transform: translateX(-3px);
    opacity: 1;
  } 100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const fadeOutMobie = keyframes`
  0% {
    height: 2rem;
    opacity: 0;
  }
  50% {
    height: 7rem;
    opacity: 0.5;
  }
  100% {
    height: 6rem;
    opacity: 1;
  }
`;

export const fadeOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
