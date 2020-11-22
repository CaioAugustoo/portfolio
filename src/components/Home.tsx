import Buttons from "./Buttons";
import * as S from "./styles";

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
      <Buttons>SOBRE MIM</Buttons>
    </S.HomeSection>
  );
};

export default HomeSection;
