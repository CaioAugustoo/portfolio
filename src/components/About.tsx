import { FC } from "react";
import * as S from "./styles";

import Titles from "./Titles";

const About: FC = () => {
  return (
    <S.AboutSection id="about">
      <Titles>SOBRE MIM</Titles>

      <S.AboutTexts>
        Meu nome é <em>Caio Augusto</em>,{" "}
        <em>
          <strong>tenho 17 anos</strong>
        </em>
        , moro no{" "}
        <em>
          <strong>Brasil</strong>
        </em>
        , especificamente em{" "}
        <em>
          <strong>Goiânia.</strong>
        </em>{" "}
        Atualmente tenho estudado, para futuramente, tornar-me um{" "}
        <em>
          <strong>desenvolvedor fullstack</strong>
        </em>
        .
      </S.AboutTexts>

      <S.AboutTexts>
        <span>Minha paixão por tecnologia</span> nasceu quando{" "}
        <em>
          {" "}
          <strong>eu tinha 5 anos </strong>
        </em>
        de idade, quando eu utilizei pela a <span>primeira vez</span> um
        computador.
      </S.AboutTexts>

      <S.AboutTexts>
        Sempre fui <span>apaixonado por programação</span> mas eu achava que eu
        <em>
          {" "}
          <strong>não possuía dom para programar</strong>
        </em>
        . Sobretudo, quando eu <span>desenvolvi meu primeiro site</span> em{" "}
        <span>27/03/2020</span> eu me{" "}
        <em>
          <strong>apaixonei por completo</strong>
        </em>{" "}
        pelo mundo da programação e decidi que iria me{" "}
        <span>esforçar ao máximo</span> para aprender a escrever{" "}
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
        <span>amo ajudar as pessoas que estão iniciando</span>, assim como eu já
        fui iniciante. Além do mais, vejo os{" "}
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
        <em>
          Atualmente <strong>trabalho</strong> com as seguintes{" "}
          <strong>tecnologias</strong>:
        </em>
      </S.AboutTexts>

      <S.Stacks>
        <span>
          SCSS, JavaScript, TypeScript, Babel, Webpack, ReactJS, React Native,
          styled-components, Redux, Gatsby, Firebase, NextJS, Strapi, Apollo,
          GraphQL, Jest, RTL, StoryBook, Cypress
        </span>
      </S.Stacks>
    </S.AboutSection>
  );
};

export default About;
