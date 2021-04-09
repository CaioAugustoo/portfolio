import styled, { css } from "styled-components";

// Import keyframes to animate
import { appears } from "styles/keyframes/keyframes";

export const WorkItem = styled.div`
  ${({ theme }) => css`
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
    transform: translateY(100px);
    opacity: 0;
  `}
`;

export const WorkItemAbout = styled.div`
  ${({ theme }) => css`
    max-width: 600px;
    padding: 2.5rem;
  `}
`;

export const WorkItemTitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: 20px;
    font-size: ${theme.font.sizes.smallx2};
  `}
`;

export const WorkItemDescription = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xsmallx2};
    line-height: 1.7;

    margin: 30px 0px;
  `}
`;

export const WorkItemButton = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmallx2};

    display: flex;
    justify-content: space-between;

    cursor: pointer;
    transition: color 0.3s ease;
  `}
`;

export const WorkItemImage = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    width: 630px;

    margin-left: 50px;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `}
`;
