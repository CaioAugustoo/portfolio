import * as S from "./styles";

import { ButtonProps } from "types/types";

const Button = ({
  children,
  size = "normal",
  isOutlined = false,
}: ButtonProps) => {
  return (
    <S.Button size={size} isOutlined={isOutlined}>
      {children}
    </S.Button>
  );
};

export default Button;
