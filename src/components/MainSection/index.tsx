import Buttons from "../Buttons/index";
import * as S from "./styles";
import { Link } from "react-scroll";
import React from "react";
import { Container } from "../../styles/globals";
import ScrollDown from "../ScrollDown/index";

const HomeSection = () => {
  return (
    <S.HomeSection id="home">
      <S.HomeLogo>
        <img src="/img/hero.svg" alt="Logo azul com as iniciais C.A" />
      </S.HomeLogo>
      <Container>
        <S.ItemsHomeWrapper>
          <S.Welcome>
            <span role="img" aria-label="emoji de mão com dois dedos">
              Eaí!✌🏼
            </span>
          </S.Welcome>
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
        </S.ItemsHomeWrapper>
        <ScrollDown />
      </Container>
    </S.HomeSection>
  );
};

export default HomeSection;
