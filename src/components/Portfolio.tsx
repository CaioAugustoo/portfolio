import * as S from "./styles";
import { FC } from "react";
import PortfolioItems from "./PortfolioItems";
import Titles from "./Titles";

const Portfolio: FC = () => {
  return (
    <S.PortfolioSection id="portfolio">
      <Titles>PORTFÓLIO</Titles>
      <PortfolioItems />
    </S.PortfolioSection>
  );
};

export default Portfolio;
