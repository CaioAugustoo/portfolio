import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from "types/types";

const buttonModifiers = {
  isOutlined: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
};

export const Button = styled.button<Pick<ButtonProps, "size" | "isOutlined">>`
  ${({ theme, size, isOutlined }) => css`
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

    ${isOutlined && buttonModifiers.isOutlined(theme)}

    &:hover {
      background-color: ${theme.colors.secondary};
      transform: translateY(-3px);
    }
  `}
`;
