import * as ButtonStyles from "components/UI/Button/styles";
import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: calc(${theme.spacings.small} * 4) 0 0 0;
  `}
`;

export const Person = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.small} auto;

    img {
      border-radius: 100%;
    }

    h2 {
      margin: ${theme.spacings.small};
    }
  `}
`;

export const Links = styled.div`
  ${({ theme }) => css`
    max-width: 55rem;
    width: 100%;
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.medium} auto 0 auto;

    ${ButtonStyles.Button} {
      margin: ${theme.spacings.small} 0;
    }
  `}
`;

export const BackToHome = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0 0 0;
    text-align: center;

    a {
      font-size: ${theme.font.sizes.xxxsmall2};
      color: ${theme.colors.white};
      text-decoration: underline;
    }
  `}
`;
