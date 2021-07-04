import Title from "components/UI/Title";
import Button from "components/UI/Button";

import Link from "next/link";

import * as S from "./styles";

import { Container } from "styles/globals";

const ContactSection = () => {
  return (
    <S.ContactSection id="contact">
      <Container>
        <Title>Contact</Title>

        <S.ContactMeText>
          If you want to carry out a project or chat with me, do not hesitate to
          send me an email:{" "}
          <a href="mailto:caioamfr@gmail.com">caioamfr@gmail.com</a>
        </S.ContactMeText>

        <a
          href="https://linktr.ee/caioaugustoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Contact</Button>
        </a>
      </Container>
    </S.ContactSection>
  );
};

export default ContactSection;
