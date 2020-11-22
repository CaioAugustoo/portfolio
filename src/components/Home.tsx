import Buttons from "./Buttons";
import * as S from "./styles";
import { Link } from "react-scroll";

const HomeSection = () => {
  return (
    <S.HomeSection id="home">
      <S.BackgroundImage
        src="/img/hero.svg"
        alt="Logo pessoal com as iniciais 'C.A'"
      />
      <S.Welcome>Eaí!✌🏼</S.Welcome>
      <S.Name>
        Eu sou o <span>Caio.</span>
      </S.Name>
      <S.About>Desenvolvedor Front-end entusiasta</S.About>
      <Buttons>
        <Link to="about" spy={true} smooth="easeInOutQuart" duration={1000}>
          SOBRE MIM
        </Link>
      </Buttons>
    </S.HomeSection>
  );
};

export default HomeSection;
