import * as S from "./styles";
import Projects from "./projects.json";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PortfolioItems = () => {
  const [position, setPosition] = useState(0);
  const [active, setActive] = useState(0);
  const projectRef = useRef(null);
  const [media, setMedia] = useState(0);

  useEffect(() => {
    const { width } = projectRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  // Responsive
  useEffect(() => {
    if (window.innerWidth >= 1025) setMedia(200);
    else setMedia(0);
  });

  const moveItemToAnimateLikeAsSlide = ({ clientX }) => {
    const windowWidth = window.innerWidth / 2;

    if (windowWidth <= 513) return false;
    else if (active >= 0 && active <= 4) {
      if (clientX > windowWidth) setActive(active + 1);
    }

    if (active >= 1 && active <= 5) {
      if (clientX < windowWidth) setActive(active - 1);
    } else return true;
  };

  return (
    <S.PortfolioItemWrapper>
      {Projects.map((project, index) => (
        <S.PortfolioItem
          key={index}
          ref={projectRef}
          className={active === index && media && "active"}
          style={{
            transform: `translateX(${position + media}px)`,
          }}
        >
          <S.ItemImage
            onClick={moveItemToAnimateLikeAsSlide}
            src={project.project_image}
            alt={`Projeto ${project.project_name}`}
            width="630"
          />
          <S.ItemAbout>
            <S.ItemTitle onClick={moveItemToAnimateLikeAsSlide}>
              {project.project_name}
            </S.ItemTitle>
            <S.ItemDescription onClick={moveItemToAnimateLikeAsSlide}>
              <p>{project.project_description}</p>
            </S.ItemDescription>
            <S.ItemVisit>
              <a
                href={project.project_git}
                target="_blank"
                rel="noopener noreferrer"
              >
                Código fonte
              </a>
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar <span>→</span>
              </a>
            </S.ItemVisit>
          </S.ItemAbout>
        </S.PortfolioItem>
      ))}
    </S.PortfolioItemWrapper>
  );
};

export default PortfolioItems;
