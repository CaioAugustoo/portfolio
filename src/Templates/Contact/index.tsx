import Button from "components/UI/Button";
import socials from "./links.json";

import Link from "next/link";
import Image from "next/image";

import * as S from "./styles";

const ContactPage = () => {
  return (
    <S.Wrapper>
      <S.Person>
        <Image
          src="/img/me.png"
          alt="A man with glasses"
          width={100}
          height={100}
        />
        <h2>Caio Augusto</h2>
      </S.Person>

      <S.Links>
        {socials.map(({ link, social }) => (
          <a
            href={link}
            key={link}
            target="_blank"
            title={`Go to my ${social}`}
          >
            <Button fullWidth>{social}</Button>
          </a>
        ))}
      </S.Links>

      <S.BackToHome>
        <Link href="/" passHref>
          <a title="Go to portfolio page">Go back to Portfolio</a>
        </Link>
      </S.BackToHome>
    </S.Wrapper>
  );
};

export default ContactPage;
