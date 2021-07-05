import Title from "components/UI/Title";
import useAnimateOnScroll from "hooks/useAnimateOnScroll";
import { AboutPageDataProps } from "types/types";

import { Container } from "styles/globals";
import * as S from "./styles";

const AboutSection = ({ data }: AboutPageDataProps) => {
  const elementRef = useAnimateOnScroll();

  return (
    <S.AboutSection id="about" ref={elementRef}>
      <Container>
        <Title>About</Title>
        <S.AboutTexts dangerouslySetInnerHTML={{ __html: data.about.html }} />
      </Container>
    </S.AboutSection>
  );
};

export default AboutSection;
