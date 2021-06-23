import * as S from "./styles";

import { ButtonProps } from "types/types";

const Button = ({ children }: ButtonProps) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
