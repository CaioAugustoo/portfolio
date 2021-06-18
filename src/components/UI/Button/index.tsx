import * as S from "./styles";

import { ButtonProps } from "types/types";

const Button = ({ children, size = "normal" }: ButtonProps) => {
  return <S.Button size={size}>{children}</S.Button>;
};

export default Button;
