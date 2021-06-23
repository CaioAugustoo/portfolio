import * as S from "./styles";

import { ButtonProps } from "types/types";

const Button = ({ fullWidth = false, children }: ButtonProps) => {
  return <S.Button fullWidth={fullWidth}>{children}</S.Button>;
};

export default Button;
