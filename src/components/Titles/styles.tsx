import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    color: ${theme.colors.black};

    margin-bottom: 70px;
    display: block;

    &:before {
      content: "";
      display: block;
      margin: 0 auto;

      width: 5px;
      height: 27px;

      position: relative;
      top: 29px;
      left: -90px;

      z-index: -1;
      transform: rotate(-5deg);
      background: ${theme.colors.primary};

      @media (max-width: ${theme.media.small}) {
        width: 4px;
        height: 23px;
        top: 24px;
        left: -75px;
      }
    }

    @media (max-width: ${theme.media.small}) {
      font-size: ${theme.font.sizes.smallx2};
      margin-bottom: 40px;
    }
  `}
`;
