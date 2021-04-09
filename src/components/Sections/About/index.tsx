import { Container } from "styles/globals";
import * as S from "./styles";

import Title from "components/UI/Title";
import useAnimateOnScroll from "hooks/useAnimateOnScroll";

const AboutSection = () => {
  const myCurrentAge = new Date().getFullYear() - 1 - 2003;
  const elementRef = useAnimateOnScroll();

  return (
    <S.AboutSection id="about" ref={elementRef}>
      <Container>
        <Title>About</Title>

        <S.AboutTexts>
          My name is Caio Augusto, I’m from Brazil and I’m {myCurrentAge} years
          old.
        </S.AboutTexts>
        <S.AboutTexts>
          My passion for technology was born when I was 5 years old, when I
          first used a computer.
        </S.AboutTexts>
        <S.AboutTexts>
          I started as a Front End Developer on 3/8/2020. Since then I have been
          dedicating about 12 hours a day to studies.
        </S.AboutTexts>
        <S.AboutTexts>
          I see that I am on the right path because I love helping people who
          are starting out, just as I was a beginner. Furthermore, I see the
          results that the dedicated hours bring.
        </S.AboutTexts>
        <S.AboutTexts>
          I have a huge passion for helping people who are just starting out and
          my biggest hobby is contributing to open source projects. Codes,
          movies, video games, music, podcast and studies are subjects that
          interest me.
        </S.AboutTexts>
        <S.AboutTexts>
          In my spare time I usually read about <span>reactive</span>,{" "}
          <span>asynchronous</span> and <span>object-oriented</span>{" "}
          programming. I like to read{" "}
          <a
            href="https://www.amazon.com/dp/B085D95SX5?searchxofy=true&binding=kindle_edition&ref_=dbs_s_aps_series_rwt_tkin"
            target="_blank"
            title="Martin's book series"
          >
            Robert C. Martin's book series
          </a>
          .
        </S.AboutTexts>
        <S.AboutTexts>
          I work as Front-end developer using techs like{" "}
          <a
            href="https://pt-br.reactjs.org/"
            target="_blank"
            title="React.js's documentation"
          >
            React.js
          </a>
          ,{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            title="Documentation of TypeScript"
          >
            TypeScript
          </a>
          ,{" "}
          <a
            href="https://testing-library.com/docs/react-testing-library/intro/"
            target="_blank"
            title="Documentation of React Testing Library"
          >
            React Testing Library
          </a>{" "}
          and more.
        </S.AboutTexts>
      </Container>
    </S.AboutSection>
  );
};

export default AboutSection;
