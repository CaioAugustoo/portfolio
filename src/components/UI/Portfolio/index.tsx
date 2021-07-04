import * as S from "./styles";

import { PortfolioItemProps } from "types/types";

const PortfolioItems = ({ projects }: PortfolioItemProps) => {
  return (
    <>
      <div>
        {projects?.map(({ image, title, about, link, sourcelink }, index) => (
          <S.WorkItem key={link} style={{ animationDelay: `${index * 200}ms` }}>
            <S.Wrapper>
              <S.WorkItemTitle>{title}</S.WorkItemTitle>
              <S.WorkItemDescription>{about}</S.WorkItemDescription>

              <S.WorkItemButton>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Visit →
                </a>
                <a href={sourcelink} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              </S.WorkItemButton>
            </S.Wrapper>
            <S.WorkItemImage
              src={image.url}
              width="640"
              height="320"
              alt={`Project ${title}`}
            />
          </S.WorkItem>
        ))}
      </div>
    </>
  );
};
export default PortfolioItems;
