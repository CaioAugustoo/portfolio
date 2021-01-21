import React from "react";
import { Container } from "../../styles/globals";
import * as S from "./styles";

const Footer = () => {
  const currentDate = new Date();
  
  return (
    <S.Footer>
      <Container>
        <S.Rights>
          © ${currentDate.getFullYear()} - Caio Augusto <br />
          Alguns direitos reservados.
        </S.Rights>
      </Container>
    </S.Footer>
  );
};

export default Footer;
