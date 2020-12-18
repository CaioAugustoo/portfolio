import { TitlesProps } from "types/types";
import * as S from "./styles";

const Titles = ({ children }: TitlesProps) => {
  return <S.Title>{children}</S.Title>;
};

export default Titles;
