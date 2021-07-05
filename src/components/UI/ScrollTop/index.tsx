import useScroll from "hooks/useScroll";
import { Link } from "react-scroll";

import * as S from "./styles";

const ScrollTop = () => {
  const { scrolled } = useScroll();

  return (
    <S.ScrollTop scrolled={scrolled}>
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
