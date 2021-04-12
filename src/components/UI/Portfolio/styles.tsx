import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 1rem 8rem 1rem 0rem;

    @media (max-width: ${theme.media.lg}) {
      padding: 2rem 0rem;
      text-align: center;
    }
  `}
`;

export const WorkItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: 5rem 0 6rem 0;
    transform: translateY(100px);
    opacity: 0;

    @media (max-width: ${theme.media.lg}) {
      flex-direction: column-reverse;
      max-width: 600px;
      margin: 5rem auto;
      text-align: center;
    }
  `}
`;

export const WorkItemTitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: 20px;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.medium};

    @media (max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.xxsmallx2};
      margin: 10px 0;
    }
  `}
`;

export const WorkItemDescription = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xxxsmall};
    line-height: 1.8;

    margin: 30px 0 10px 0;

    @media (max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.xxxsmall2};
      margin: 20px 0 0 0;
    }
  `}
`;

export const WorkItemButton = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xxxsmall};
    padding-top: 3rem;

    a {
      color: ${theme.colors.white};

      &:hover {
        text-decoration: underline;
      }
    }

    display: flex;
    justify-content: space-between;

    cursor: pointer;
    transition: color 0.3s ease;

    @media (max-width: ${theme.media.md}) {
      font-size: ${theme.font.sizes.xxxsmall2};
      justify-content: space-around;
    }
  `}
`;

export const WorkItemImage = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    width: 640px;
    display: flex;
    border-radius: 5px;

    @media (max-width: ${theme.media.lg}) {
      margin: 0 auto;
    }
  `}
`;
