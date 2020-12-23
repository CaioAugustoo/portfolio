import styled from "styled-components";

import { theme } from "../../styles/theme/theme";

// Import keyframes to animate
import { appears } from "../../styles/keyframes/keyframes";

export const WorkItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  min-height: 320px;
  max-width: 1120px;
  margin: 80px 0px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.05);
    transform: translateY(-5px);
  }
  @media (max-width: ${theme.media.large}) {
    box-shadow: none;
    flex-direction: column-reverse;
    text-align: center;
    margin: 30px 0px;
    &:hover {
      box-shadow: none;
    }
  }
  &.scrolled {
    animation: ${appears} 0.5s ease backwards;
  }
  &.unscrolled {
    opacity: 0;
    transform: translateY(100px);
  }
`;

export const WorkItemAbout = styled.div`
  max-width: 600px;
  padding: 2.5rem;
  @media (max-width: ${theme.media.small}) {
    padding: 2.5rem 0;
  }
`;

export const WorkItemTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 2rem;
`;

export const WorkItemDescription = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.7;
  margin: 30px 0px;
  @media (max-width: ${theme.media.small}) {
    font-size: 1.4rem;
  }
`;

export const WorkItemButton = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;

  cursor: pointer;
  transition: color 0.3s ease;
  a {
    color: ${theme.colors.black};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  @media (max-width: ${theme.media.large}) {
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 0.5px;
    justify-content: space-around;
  }
`;

export const WorkItemImage = styled.img`
  max-width: 100%;
  width: 630px;
  margin-left: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media (max-width: ${theme.media.large}) {
    margin-left: 0px;
    border-radius: 5px;
  }
`;
