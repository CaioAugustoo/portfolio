import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 12px 40px;
    border-radius: 5px;
    border: none;
    font-family: ${theme.font.family};
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      background-color: ${theme.colors.secondary};
      transform: translateY(-3px);
    }
  `}
`;
