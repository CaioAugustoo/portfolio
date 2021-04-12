import { Title } from "components/UI/Title/styles";
import styled, { css } from "styled-components";
import { fromBottom } from "styles/keyframes/keyframes";

export const ContactSection = styled.section`
  ${({ theme }) => css`
    margin: 0rem auto 8rem auto;
    max-width: 500px;
    text-align: center;

    &.active > p, &.active > a {
      animation: ${fromBottom} .3s ease;
    }

    ${Title} {
      text-align: center;

      &.active:before {
        display: inline;
        width: 210px;

        @media (max-width: ${theme.media.md}) {
          width: 128px;
        }
      }
    }
  `}
`;

export const ContactMeText = styled.p`
  ${({theme}) => css`
    margin: 3.5rem 0 5rem 0;
    font-size: ${theme.font.sizes.xxsmallx2};
    text-align: center;

    a {
      color: ${theme.colors.primary};

      &:hover {
        text-decoration: underline;
      }
    }

    @media(max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.xxxsmall};
    }
  `}
`
