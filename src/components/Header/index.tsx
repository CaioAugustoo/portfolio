import { Link } from "react-scroll";
import * as S from "./styles";

import { Container } from "../../styles/globals";
import { useEffect, useState } from "react";

import DarkThemeButton from "../Darkthemebutton/index";

const Header = ({
  firstItem = "Sobre Mim",
  secondItem = "Portfólio",
  thirdItem = "Contato",
}) => {
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
            <img
              src="/img/logo.svg"
              alt="Logo com as inicias 'C A'"
              width={35}
              height={37}
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
                  {firstItem}
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  {secondItem}
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to="contact"
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  {thirdItem}
                </Link>
              </S.NavItem>
              <DarkThemeButton id="ntmb" />
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
                {firstItem}
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
                {secondItem}
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
                {thirdItem}
              </Link>
            </S.MobileItem>
            <S.MobileItem>
              <DarkThemeButton id="ntma" />
            </S.MobileItem>
          </S.MobileItens>
        </S.MobileWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
