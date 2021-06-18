import Button from "components/UI/Button";
import Link from "next/link";
import * as S from "./styles";

export const ContactPage = () => {
  return (
    <S.Wrapper>
      <Link href="https://caioohtml.com/" passHref>
        <a target="_blank">
          <Button isOutlined>Portfolio</Button>
        </a>
      </Link>

      <Link href="https://www.linkedin.com/in/caio-augustoo/" passHref>
        <a target="_blank">
          <Button isOutlined>Linkedin</Button>
        </a>
      </Link>

      <Link href="https://github.com/CaioAugustoo" passHref>
        <a target="_blank">
          <Button isOutlined>Github</Button>
        </a>
      </Link>

      <Link href="https://www.instagram.com/iamcaio_a/" passHref>
        <a target="_blank">
          <Button isOutlined>Instagram</Button>
        </a>
      </Link>
    </S.Wrapper>
  );
};
