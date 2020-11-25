import Buttons from "./Buttons";
import * as S from "./styles";
import { Link } from "react-scroll";
import { FC } from "react";

const HomeSection: FC = () => {
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
      <Link
        style={{ marginRight: "auto" }}
        to="about"
        spy={true}
        smooth="easeInOutQuart"
        duration={1000}
      >
        <Buttons>SOBRE MIM</Buttons>
      </Link>
    </S.HomeSection>
  );
};

export default HomeSection;
