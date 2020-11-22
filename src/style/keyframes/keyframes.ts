import { keyframes } from 'styled-components';

export const fadeOut = keyframes`
  0% {
      height: 2rem;
      opacity: 0;
    }
    50% {
      height: 9rem;
      opacity: 0.5;
    }
    100% {
      height: 7rem;
      opacity: 1;
    }
`;

export const fromBottom = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  } 70% {
    transform: translateY(3px);
    opacity: 1;
  } 100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;