import { Container } from "../../styles/globals";
import * as S from "./styles";

import Titles from "../Titles/index";

const AboutSection = () => {
  return (
    <S.AboutSection id="about">
      <Container>
        <Titles>SOBRE MIM</Titles>

        <S.AboutTexts>
          Meu nome é <span>Caio Augusto</span>, tenho 17 anos , moro no{" "}
          <em>
            <strong>Brasil</strong>
          </em>
          , especificamente em Goiânia. Atualmente tenho estudado, para
          futuramente, tornar-me um{" "}
          <em>
            <strong>desenvolvedor fullstack</strong>
          </em>
          .
        </S.AboutTexts>

        <S.AboutTexts>
          <em>
            <strong>Minha paixão por tecnologia</strong>
          </em>{" "}
          nasceu quando eu tinha 5 anos de idade, quando eu utilizei pela a{" "}
          primeira vez um computador.
        </S.AboutTexts>

        <S.AboutTexts>
          Sempre fui apaixonado por programação mas eu achava que eu não possuía
          dom para programar. Sobretudo, quando eu desenvolvi{" "}
          <span>meu primeiro site </span>
          em 27/03/2020 eu me apaixonei por completo pelo mundo da programação e
          decidi que iria me <span>esforçar ao máximo</span> para aprender a
          escrever{" "}
          <em>
            <strong>códigos</strong>
          </em>
          .
        </S.AboutTexts>

        <S.AboutTexts>
          <em>
            <strong>Iniciei</strong>
          </em>{" "}
          como Desenvolvedor Front End em <span>08/03/2020</span>. Desde então
          venho dedicando cerca de{" "}
          <em>
            <strong>12hrs por dia</strong>
          </em>{" "}
          aos estudos. Vejo que estou no caminho certo pois{" "}
          <span>amo ajudar as pessoas que estão iniciando</span>, assim como eu
          já fui iniciante. Além do mais, vejo os{" "}
          <em>
            <strong>resultados</strong>
          </em>{" "}
          que as horas dedicadas trazem.
        </S.AboutTexts>

        <S.AboutTexts>
          Possuo uma <span>paixão enorme</span> por{" "}
          <em>
            <strong>ajudar pessoas </strong>
          </em>
          que estão iniciando e meu{" "}
          <em>
            <strong>maior hobby</strong>
          </em>{" "}
          é contribuir para projetos <span>open source</span>. Códigos, filmes,
          videogame, músicas, podcast e <span>estudos</span> são assuntos que me
          <em>
            <strong> interessam</strong>
          </em>
          .
        </S.AboutTexts>

        <S.AboutTexts>
          Atualmente{" "}
          <em>
            <strong>trabalho</strong>
          </em>{" "}
          com as seguintes{" "}
          <em>
            <strong>tecnologias</strong>
          </em>
          :
        </S.AboutTexts>

        <S.Stacks>
          <span>
            HTML, CSS, SCSS, Bootstrap, JavaScript, TypeScript, Babel, Webpack,
            ReactJS, styled-components, Redux, Firebase, NextJS, Strapi, Apollo,
            GraphQL, Jest, RTL, StoryBook, Cypress
          </span>
        </S.Stacks>
      </Container>
    </S.AboutSection>
  );
};

export default AboutSection;
