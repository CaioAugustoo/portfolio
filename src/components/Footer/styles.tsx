import styled, { css } from "styled-components";

export const Footer = styled.footer`
  height: auto;
  width: 100%;
  margin-top: 120px;
`;

export const Rights = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmallx2};
    font-weight: ${theme.font.normalx2};
    opacity: 0.7;
    text-align: center;
    margin: 0px 0 50px 0;
  `}
`;
