import useDarkMode from "use-dark-mode";
import * as S from "./styles";

const DarkThemeButton = ({ id }) => {
  const darkMode = useDarkMode(false);
  return (
    <S.ButtonDarkTheme>
      <S.Input
        type="checkbox"
        className="dn"
        id={id}
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <S.Label htmlFor={id} className="toggle">
        <S.Span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </S.Span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </S.Label>
    </S.ButtonDarkTheme>
  );
};

export default DarkThemeButton;
