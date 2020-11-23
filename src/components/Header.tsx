import Image from "next/image";
import * as S from "./styles";

import { Link } from "react-scroll";

import { Container } from "../style/theme/global";
import { useEffect, useState } from "react";
import DarkThemeButton from "./DarkThemeButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  });

  return (
    <S.Header>
      <Container>
        <S.ItensWrapper>
          <Link to="home" spy={true} smooth="easeInOutQuart" duration={1000}>
            <Image
              src="/img/logo.svg"
              alt="Logo com as inicias 'C A'"
              width={35}
              height={37}
              quality={100}
              loading="eager"
            />
          </Link>

          <S.Nav>
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
              <DarkThemeButton id="oi" />
            </S.NavItens>
          </S.Nav>

          <S.HambIcon
            className={isMenuOpen ? "menu_active" : ""}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </S.ItensWrapper>
        <S.MobileWrapper
          id="hmocIu"
          className={isMenuOpen ? "menu_active" : ""}
        >
          <S.MobileItens>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="about"
                spy={true}
                smooth="easeInOutQuart"
                duration={1000}
              >
                SOBRE MIM
              </Link>
            </S.MobileItem>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="portfolio"
                spy={true}
                smooth="easeInOutQuart"
                duration={1000}
              >
                PORTFOLIO
              </Link>
            </S.MobileItem>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="contact"
                spy={true}
                smooth="easeInOutQuart"
                duration={1000}
              >
                CONTATO
              </Link>
            </S.MobileItem>
          </S.MobileItens>
        </S.MobileWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
