import styled, { css } from "styled-components";
import { fromBottom } from "styles/keyframes/keyframes";

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    position: relative;
    opacity: 0;


    &:before {
      transition: all .8s ease;
      content: '';
      display: block;
      width: 0px;
      height: 18px;
      background-color: ${theme.colors.secondary};
      position: absolute;
      bottom: 13px;
      z-index: -1;
      border-radius: 1px;
    }


    &.active {
      animation: ${fromBottom} .5s backwards;
      opacity: 1;

      &:before {
        width: 91px;
      }
    }

    @media(max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.small};

      &:before {
        height: 10px;
        bottom: 8px;
      }

      &.active:before {
        width: 61px;
      }
    }
  `}
`;
