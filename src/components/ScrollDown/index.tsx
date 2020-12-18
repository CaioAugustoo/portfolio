import * as S from "./styles";
import { Link } from "react-scroll";
import React from "react";

const ScrollDown = () => {
  return (
    <S.ScrollDownArrow>
      <Link to="about" spy={true} smooth="easeInOutQuart" duration={1000}>
        <img
          src="/img/scroll_down.svg"
          alt="Icone para descer para próxima seção"
        />
      </Link>
    </S.ScrollDownArrow>
  );
};

export default ScrollDown;
