import React from "react";
import { Container } from "../../styles/globals";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <S.Rights>
          © 2020 - Caio Augusto <br />
          Alguns direitos reservados.
        </S.Rights>
      </Container>
    </S.Footer>
  );
};

export default Footer;
