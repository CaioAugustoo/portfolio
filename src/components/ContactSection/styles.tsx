import styled, { css } from "styled-components";

export const ContactSection = styled.section`
  height: auto;
  padding-top: 100px;
  div:nth-child(3) {
    margin: 30px auto 80px auto;
    text-align: center;
  }
`;

export const ContactText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-align: center;
    line-height: 1.5;
    span,
    a {
      color: ${theme.colors.secondary} !important;
    }
    @media (max-width: ${theme.media.small}) {
      font-size: ${theme.font.sizes.xsmallx2};
    }
  `}
`;

export const ContactLinks = styled.div`
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
