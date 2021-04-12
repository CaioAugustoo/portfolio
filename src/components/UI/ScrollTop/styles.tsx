import styled, { css } from "styled-components";

export const ScrollTop = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 100px;
    padding: 0.9rem;
    border: none;
    cursor: pointer;
    transition: all .3s ease;
    transform: translateY(0);

    &:hover {
      background: ${theme.colors.primary};
      transform: translateY(-2px);
    }
  `}
`;
