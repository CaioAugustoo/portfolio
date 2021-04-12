import useAnimateOnScroll from "hooks/useAnimateOnScroll";
import { TitlesProps } from "types/types";

import * as S from "./styles";

const Title = ({ children }: TitlesProps) => {
  const elementRef = useAnimateOnScroll()

  return <S.Title ref={elementRef}>{children}</S.Title>;
};

export default Title;
