import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import * as S from "./styles";

const ScrollTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const verifyUserScroll = () => {
      window.pageYOffset > 600 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", verifyUserScroll);
    return () => window.removeEventListener("scroll", verifyUserScroll);
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
