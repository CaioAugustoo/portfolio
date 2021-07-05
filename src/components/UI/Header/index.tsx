import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import useScroll from "hooks/useScroll";

import { Container } from "styles/globals";
import * as S from "./styles";

const DURATION = 1000;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrolled } = useScroll(200);

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isMenuOpen]);

  return (
    <S.Header scrolled={scrolled}>
      <Container>
        <S.ItemsWrapper>
          <Link
            to="home"
            spy={false}
            smooth="easeInOutQuart"
            duration={DURATION}
          >
            <img
              src="/img/logo.svg"
              alt="Logo with initials 'C A'"
              width={35}
              height={37}
            />
          </Link>

          <S.Nav>
            <S.NavItens className={isMenuOpen ? "menu_active" : ""}>
              <S.NavItem>
                <Link
                  to="about"
                  spy={false}
                  smooth="easeInOutQuart"
                  duration={DURATION}
                  activeClass="active"
                >
                  About
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to="portfolio"
                  spy={false}
                  smooth="easeInOutQuart"
                  duration={DURATION}
                  activeClass="active"
                >
                  Portfolio
                </Link>
              </S.NavItem>
              <S.NavItem>
                <a
                  href="https://caio-blog.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </S.NavItem>
              <S.NavItem>
                <Link
                  to="contact"
                  spy={false}
                  smooth="easeInOutQuart"
                  duration={DURATION}
                  activeClass="active"
                >
                  Contact
                </Link>
              </S.NavItem>
            </S.NavItens>
          </S.Nav>

          <S.HambIcon
            className={isMenuOpen ? "menu_active" : ""}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </S.ItemsWrapper>
        <S.MobileWrapper
          id="hmocIu"
          className={isMenuOpen ? "menu_active" : ""}
        >
          <S.MobileItems>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="about"
                spy={false}
                smooth="easeInOutQuart"
                duration={DURATION}
              >
                About
              </Link>
            </S.MobileItem>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="portfolio"
                spy={false}
                smooth="easeInOutQuart"
                duration={DURATION}
              >
                Portfolio
              </Link>
            </S.MobileItem>
            <S.MobileItem>
              <a
                href="https://caio-blog.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </S.MobileItem>
            <S.MobileItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="contact"
                spy={false}
                smooth="easeInOutQuart"
                duration={DURATION}
              >
                Contact
              </Link>
            </S.MobileItem>
          </S.MobileItems>
        </S.MobileWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
