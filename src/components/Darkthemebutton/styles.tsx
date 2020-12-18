import styled from "styled-components";

// Import colors
import { theme } from "../../styles/theme/theme";

export const ButtonDarkTheme = styled.div`
  overflow: hidden;
  position: absolute;
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
      background-color: ${theme.colors.primary};
      &:before {
        color: ${theme.colors.primary};
      }
      &:after {
        color: #ffffff;
      }
      .toggle__handler {
        background-color: #ffe5b5;
        transform: translate3d(38px, 0, 0) rotate(0) scale(0.85);
        .crater {
          opacity: 1;
        }
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
        transform: translate3d(0, 0, 0);
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
  background-color: ${theme.colors.primary};
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
