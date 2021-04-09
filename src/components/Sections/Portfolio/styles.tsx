import styled from "styled-components";
import { appears } from "styles/keyframes/keyframes";

export const PortfolioSection = styled.section`
  height: auto;
  padding-top: 100px;

  &.active > div > * {
    animation: ${appears} 0.5s ease backwards;
    transform: translateY(0);
    opacity: 1;
  }
`;
