import * as S from "./styles";

import PortfolioItems from "components/UI/Portfolio";
import Title from "components/UI/Title";

import useAnimateOnScroll from "hooks/useAnimateOnScroll";

const PortfolioSection = () => {
  const elementRef = useAnimateOnScroll(0)

  return (
    <S.Wrapper id="portfolio" ref={elementRef}>
      <Title>Portfolio</Title>
      <PortfolioItems />
    </S.Wrapper>
  );
};

export default PortfolioSection;
