import styled from "styled-components";

import { theme } from "../../styles/theme/theme";

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.black};
  text-align: center;
  margin-bottom: 70px;
  display: block;
  &:before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 5px;
    height: 27px;
    position: relative;
    top: 29px;
    z-index: -1;
    left: -90px;
    transform: rotate(-5deg);
    background: ${theme.colors.primary};
    @media (max-width: ${theme.media.small}) {
      width: 4px;
      height: 23px;
      top: 24px;
      left: -75px;
    }
  }
  @media (max-width: ${theme.media.small}) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;
