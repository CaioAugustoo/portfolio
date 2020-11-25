import * as S from "./styles";
import { FC } from "react";

const Titles: FC = ({ children }) => {
  return (
    <>
      <S.Title>{children}</S.Title>
    </>
  );
};

export default Titles;
