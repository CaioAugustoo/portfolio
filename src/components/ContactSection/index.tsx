import React from "react";
import { Container } from "../../styles/globals";
import Titles from "../Titles/index";
import * as S from "./styles";
import Buttons from "../Buttons/index";

const ContactSection = () => {
  return (
    <S.ContactSection id="contact">
      <Container>
        <Titles>CONTATO</Titles>

        <S.ContactText>
          Caso você queira realizar um projeto <br /> comigo ou jogar conversa
          fora, não hesite <br />
          em mandar-me um e-mail:{" "}
          <span>
            <a href="mailto:caioamfr@gmail.com">caioamfr@gmail.com</a>
          </span>
        </S.ContactText>
        <div>
          <a
            href="https://lkt.bio/caio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Buttons>CONTATO</Buttons>
          </a>
        </div>
        <S.ContactLinks>
          <a
            href="https://github.com/CaioAugustoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/img/github_icon.svg" alt="ícone do github" />
          </a>
          <a
            href="https://codepen.io/CaioAugusto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/codepen_icon.svg" alt="ícone do codepen" />
          </a>
          <a
            href="https://www.linkedin.com/in/caio-augustoo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/linkedin_icon.svg" alt="ícone do linkedin" />
          </a>

          <a
            href="https://www.instagram.com/iamcaio_a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/instagram_icon.svg" alt="ícone do instagram" />
          </a>
        </S.ContactLinks>
      </Container>
    </S.ContactSection>
  );
};

export default ContactSection;
