import styled, { css } from "styled-components";

// Import keyframes to animate
import { fadeOpacity } from "../../styles/keyframes/keyframes";

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    height: 45px;

    border: none;
    border-radius: 100px;
    margin-right: auto;

    font-size: ${theme.font.sizes.xxsmallx2};
    font-weight: ${theme.font.medium};
    letter-spacing: 1px;
    text-transform: uppercase;

    opacity: 0;
    padding: 0px 35px;
    margin: 40px auto 0 0px;

    animation: ${fadeOpacity} 1s ease forwards;

    cursor: pointer;

    transition: all 0.3s ease;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.03);

    &:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.07);
      transform: translate3d(0px, -3px, 0px);
    }
    @media (max-width: ${theme.media.small}) {
      height: 35px;
      font-size: ${theme.font.sizes.xxsmall};
      padding: 0px 25px;
    }
  `}
`;
