import styled from "styled-components";
import { fromBottom } from "styles/keyframes/keyframes";

export const Wrapper = styled.section`
  height: auto;
  max-width: 125rem;
  margin: 0 auto;
  padding: 10rem 3rem;
  transition: all 0.3s ease;

  &.active > div > * {
    animation: ${fromBottom} .5s forwards;
  }
`;
