import Image from "next/image";
import * as S from "./styles";

import { Link } from "react-scroll";

import { Container } from "../style/theme/global";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Header>
      <Container>
        <S.ItensWrapper>
          <Link to="home" spy={true} smooth="easeInOutQuart" duration={800}>
            <Image
              src="/img/logo.svg"
              alt="Logo com as inicias 'C A'"
              width={35}
              height={37}
              quality={100}
              loading="eager"
            />
          </Link>

          <nav>
            <S.NavItens className={isMenuOpen ? "menu_active" : ""}>
              <S.NavItem>
                <Link
                  to="about"
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  SOBRE MIM
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  PORTFÓLIO
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to="contact"
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  CONTATO
                </Link>
              </S.NavItem>
            </S.NavItens>
          </nav>

          <S.HambIcon
            className={isMenuOpen ? "menu_active" : ""}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </S.ItensWrapper>

        <S.MobileWrapper className={isMenuOpen ? "menu_active" : ""}>
          <S.MobileItens>
            <S.MobileItem onClick={() => setIsMenuOpen(false)}>
              SOBRE MIM
            </S.MobileItem>
            <S.MobileItem onClick={() => setIsMenuOpen(false)}>
              PORTFÓLIO
            </S.MobileItem>
            <S.MobileItem onClick={() => setIsMenuOpen(false)}>
              CONTATO
            </S.MobileItem>
          </S.MobileItens>
        </S.MobileWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
