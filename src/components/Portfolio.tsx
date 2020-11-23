import * as S from "./styles";
import PortfolioItems from "./PortfolioItems";
import Titles from "./Titles";

const Portfolio = () => {
  return (
    <S.PortfolioSection id="portfolio">
      <Titles>PORTFÓLIO</Titles>
      <PortfolioItems />
    </S.PortfolioSection>
  );
};

export default Portfolio;
