import * as S from "./styles";
import { Link } from "react-scroll";
import { FC } from "react";

const ScrollDown: FC = () => {
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
