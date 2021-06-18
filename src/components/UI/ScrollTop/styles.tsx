import styled, { css } from "styled-components";
import { ScrollTopProps } from "types/types";

export const ScrollTop = styled.button<ScrollTopProps>`
  ${({ theme, scrolled }) => css`
    background: ${theme.colors.secondary};
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 100px;
    padding: 0.9rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: translateY(0);
    opacity: ${scrolled ? 1 : 0};
    pointer-events: ${scrolled ? "all" : "none"};

    &:hover {
      background: ${theme.colors.primary};
      transform: translateY(-2px);
    }
  `}
`;
