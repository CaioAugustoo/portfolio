import styled, { css } from "styled-components";
import { ButtonProps } from "types/types";

export const Button = styled.button<Pick<ButtonProps, "size">>`
  ${({ theme, size }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: ${size === "normal" ? "12px 40px" : "9px 30px"};
    border-radius: 5px;
    border: none;
    font-family: ${theme.font.family};
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${theme.colors.secondary};
      transform: translateY(-3px);
    }
  `}
`;
