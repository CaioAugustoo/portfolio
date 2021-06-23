import * as S from "./styles";

import PortfolioItems from "components/UI/Portfolio";
import Title from "components/UI/Title";

import useAnimateOnScroll from "hooks/useAnimateOnScroll";

import { PortfolioDataProps } from "types/types";

const PortfolioSection = ({ data }: PortfolioDataProps) => {
  const elementRef = useAnimateOnScroll(0);

  return (
    <S.Wrapper id="portfolio" ref={elementRef}>
      <Title>Portfolio</Title>
      <PortfolioItems projects={data} />
      <S.ReposLink
        href="https://github.com/CaioAugustoo"
        target="_blank"
        title="Visit my Github to see more projects"
      >
        Repositories in Github
      </S.ReposLink>
    </S.Wrapper>
  );
};

export default PortfolioSection;
