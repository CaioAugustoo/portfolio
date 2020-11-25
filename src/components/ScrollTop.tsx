import { useEffect, useState } from "react";
import * as S from "./styles";
import { FC } from "react";
import { Link } from "react-scroll";

const ScrollTop: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const verifyUserScroll = () => {
      window.pageYOffset > 600 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", verifyUserScroll);
    return () => {
      window.removeEventListener("scroll", verifyUserScroll);
    };
  });

  return (
    <S.ScrollTop style={{ opacity: scrolled ? 1 : 0 }}>
      <Link to="home" spy={true} smooth="easeInOutQuart" duration={1000}>
        <img
          src="/img/back_top.svg"
          alt="Icone para voltar ao topo da imagem"
        />
      </Link>
    </S.ScrollTop>
  );
};

export default ScrollTop;
