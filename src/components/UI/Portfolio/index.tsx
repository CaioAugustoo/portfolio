import * as S from "./styles";

import projects from "./projects.json";

const PortfolioItems = () => {
  return (
    <>
      <div>
        {projects?.map(
          (
            {
              project_image,
              project_name,
              project_description,
              project_url,
              project_git,
            },
            index
          ) => (
            <S.WorkItem
              key={index}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <S.Wrapper>
                <S.WorkItemTitle>{project_name}</S.WorkItemTitle>
                <S.WorkItemDescription>
                  {project_description}
                </S.WorkItemDescription>

                <S.WorkItemButton>
                  <a
                    href={project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit <span>→</span>
                  </a>
                  <a
                    href={project_git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </S.WorkItemButton>
              </S.Wrapper>
              <S.WorkItemImage src={project_image} alt="Project" />
            </S.WorkItem>
          )
        )}
      </div>
    </>
  );
};
export default PortfolioItems;
