import { Container } from "../../styles/globals";

import Titles from "../Titles/index";
import Buttons from "../Buttons/index";

import * as S from "./styles";

const ContactSection = () => {
  return (
    <S.ContactSection id="contact">
      <Container>
        <Titles>Contato</Titles>

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
            href="https://linktr.ee/caioaugustoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Buttons>Contato</Buttons>
          </a>
        </div>
      </Container>
    </S.ContactSection>
  );
};

export default ContactSection;
