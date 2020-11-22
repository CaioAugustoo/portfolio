import Image from "next/image";
import * as S from "./styles";

import { Container } from "../style/theme/global";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Header>
      <Container>
        <S.ItensWrapper>
          <Image
            src="/img/logo.svg"
            alt="Logo com as inicias 'C A'"
            width={35}
            height={37}
            quality={100}
            loading="eager"
          />

          <nav>
            <S.NavItens className={isMenuOpen ? "menu_active" : ""}>
              <S.NavItem>SOBRE MIM</S.NavItem>
              <S.NavItem>PORTFÓLIO</S.NavItem>
              <S.NavItem>CONTATO</S.NavItem>
            </S.NavItens>
          </nav>

          <S.HambIcon
            className={isMenuOpen ? "menu_active" : ""}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </S.ItensWrapper>

        <S.MobileWrapper className={isMenuOpen ? "menu_active" : ""}>
          <S.MobileItens>
            <S.MobileItem>SOBRE MIM</S.MobileItem>
            <S.MobileItem>PORTFÓLIO</S.MobileItem>
            <S.MobileItem>CONTATO</S.MobileItem>
          </S.MobileItens>
        </S.MobileWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
