import * as S from "./styles";
import { FC } from "react";

const Buttons: FC = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

export default Buttons;
