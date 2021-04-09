import { useRef, useEffect } from "react";

import * as S from "./styles";

import PortfolioItems from "../../UI/Portfolio/index";
import Titles from "../UI/Titles/index";

import { IntersectionObserverEntry } from "types/types";

const PortfolioSection = () => {
  const elementRef = useRef<HTMLElement>(null!);

  useEffect(() => {
    function handleMutation([entry]: IntersectionObserverEntry[]) {
      if (entry.isIntersecting) {
        elementRef.current.classList.add("active");
        observer.disconnect();
      }
    }
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(handleMutation, options);
    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <S.PortfolioSection id="portfolio" ref={elementRef}>
      <Titles>Portfólio</Titles>
      <PortfolioItems />
    </S.PortfolioSection>
  );
};

export default PortfolioSection;
