import styled, { css } from "styled-components";

export const AboutSection = styled.section`
  height: auto;
  padding-top: 100px;
`;

export const Stacks = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmallx2};
    color: ${theme.colors.black};
    text-align: center;
    line-height: 1.7;

    max-width: 800px;

    margin: 30px auto;
    padding: 0 30px;
    span {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.medium};
      font-style: ${theme.font.styles.italic};
    }
    @media (max-width: ${theme.media.small}) {
      padding: 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const AboutTexts = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-align: center;
    color: ${theme.colors.black};
    line-height: 1.75;

    margin: 30px auto;
    padding: 0 30px;
    max-width: 1000px;

    span {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.medium};
      font-style: ${theme.font.styles.italic};
    }

    @media (max-width: ${theme.media.small}) {
      font-size: ${theme.font.sizes.xsmallx2};
      padding: 0px;
      margin: 10px auto;
    }
  `}
`;
