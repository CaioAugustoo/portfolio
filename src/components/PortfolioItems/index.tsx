import React, { useEffect, useState, FC } from "react";
import * as S from "./styles";
import { Container } from "../../styles/globals";
import { PortfolioItemsProps } from "types/types";

import projects from "./projects.json";

const PortfolioItems: FC<PortfolioItemsProps> = () => {
  const [scrolledToProjects, SetScrolledToProjects] = useState(false);

  // Animate on scroll like "AOS" lib
  useEffect(() => {
    const scrollDownMakeProjectsAppear = () => {
      const valueScrolledByUser = window.scrollY;
      const pageTotalHeight = document.body.offsetHeight - window.innerHeight;
      if (valueScrolledByUser > pageTotalHeight * 0.31)
        // scrolled 31% of page
        SetScrolledToProjects(true);
      else SetScrolledToProjects(false);
    };
    window.addEventListener("scroll", scrollDownMakeProjectsAppear);
    window.addEventListener("whell", scrollDownMakeProjectsAppear);

    return () => {
      window.removeEventListener("scroll", scrollDownMakeProjectsAppear);
      window.removeEventListener("wheel", scrollDownMakeProjectsAppear);
    };
  }, [scrolledToProjects]);

  return (
    <Container>
      {projects?.map(
        (
          {
            project_name,
            project_description,
            project_git,
            project_image,
            project_url,
          },
          index
        ) => (
          <S.WorkItem
            key={index}
            className={scrolledToProjects ? "scrolled" : "unscrolled"}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <S.WorkItemAbout>
              <S.WorkItemTitle>{project_name}</S.WorkItemTitle>
              <S.WorkItemDescription>
                {project_description}
              </S.WorkItemDescription>
              <S.WorkItemButton>
                <a href={project_git} target="_blank" rel="noopener noreferrer">
                  Código fonte
                </a>
                <a href={project_url} target="_blank" rel="noopener noreferrer">
                  Visitar <span>→</span>
                </a>
              </S.WorkItemButton>
            </S.WorkItemAbout>
            <S.WorkItemImage src={project_image} alt="Project" />
          </S.WorkItem>
        )
      )}
    </Container>
  );
};
export default PortfolioItems;
