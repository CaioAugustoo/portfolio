import styled, { css } from "styled-components";

export const ScrollTop = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};

    position: fixed;
    right: 15px;
    bottom: 30px;

    padding: 8px 9px;

    border: none;
    outline: none;
    border-radius: 100px;

    cursor: pointer;
    opacity: 0;
    transition: all 0.4s ease;

    &:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.1);
      transform: translate3d(0px, -3px, 0px);
    }
  `}
`;
