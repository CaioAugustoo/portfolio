import Button from "components/UI/Button";
import Title from "components/UI/Title";

import * as S from "./styles";

import { LinksEnum } from "config/links";
import { Container } from "styles/globals";

const ContactSection = () => {
  return (
    <S.ContactSection id="contact">
      <Container>
        <Title>Contact</Title>

        <S.ContactMeText>
          If you want to carry out a project or chat with me, do not hesitate to
          send me an email:{" "}
          <a href={`mailto:${LinksEnum.Email}`}>{LinksEnum.Email}</a>
        </S.ContactMeText>

        <a href={LinksEnum.Linktree} target="_blank" rel="noopener noreferrer">
          <Button>Contact</Button>
        </a>
      </Container>
    </S.ContactSection>
  );
};

export default ContactSection;
