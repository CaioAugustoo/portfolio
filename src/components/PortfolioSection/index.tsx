import * as S from "./styles";
import PortfolioItems from "../PortfolioItems/index";
import Titles from "../Titles/index";

const PortfolioSection = () => {
  return (
    <S.PortfolioSection id="portfolio">
      <Titles>PORTFÓLIO</Titles>
      <PortfolioItems />
    </S.PortfolioSection>
  );
};

export default PortfolioSection;
