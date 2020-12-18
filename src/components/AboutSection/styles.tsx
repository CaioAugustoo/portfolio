import styled from "styled-components";

// Import colors
import { theme } from "../../styles/theme/theme";

export const AboutSection = styled.section`
  height: auto;
  padding-top: 100px;
`;

export const Stacks = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;
  color: ${theme.colors.black};
  text-align: center;
  max-width: 800px;
  margin: 30px auto;
  padding: 0 30px;
  span {
    color: ${theme.colors.primary};
    font-weight: 600;
    font-style: italic;
  }
  @media (max-width: ${theme.media.small}) {
    padding: 0;
    font-size: 1.4rem;
  }
`;

export const AboutTexts = styled.p`
  font-size: 1.7rem;
  line-height: 1.75;
  color: ${theme.colors.black};
  text-align: center;
  margin: 30px auto;
  padding: 0 30px;
  max-width: 1000px;
  span {
    color: ${theme.colors.primary};
    font-weight: 600;
    font-style: italic;
  }
  @media (max-width: ${theme.media.small}) {
    font-size: 1.5rem;
    padding: 0px;
    margin: 10px auto;
  }
`;
