import * as S from "./styles";

import { ButtonProps } from "types/types";

const Buttons = ({ children }: ButtonProps) => {
  return <S.Button>{children}</S.Button>;
};

export default Buttons;
