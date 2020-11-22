import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,500&display=swap"
            rel="stylesheet"
          />
          <title>Caio Augusto | Desenvolvedor Front-end</title>
          <meta name="title" content="Caio Augusto | Desenvolvedor Front-end" />
          <meta
            name="description"
            content="Desenvolvedor Front-end & UI/UX Designer."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://caiohtml.com/" />
          <meta
            property="og:title"
            content="Caio Augusto | Desenvolvedor Front-end"
          />
          <meta name=" theme-color" content="#0185b2"></meta>
          <meta
            property="og:description"
            content="Desenvolvedor Front-end & UI/UX Designer."
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://caiohtml.com/" />
          <meta
            property="twitter:title"
            content="Caio Augusto | Desenvolvedor Front-end"
          />
          <meta
            property="twitter:description"
            content="Desenvolvedor Front-end & UI/UX Designer."
          />
          <meta
            name="keywords"
            content="front-end, desenvolvedor front-end, ui ux designer, designer gráfico, 
            desenvolvedor front-end freelancer, desenvolvedor reactjs, desenvolvedor javascript, 
            javascript, react, reactjs, typescript, strapi, api, dev, nextjs, cypress, tests, autoditada, 
            caioaugusto, caioaugusto, caiohtml, caio augusto, freelancer, freela"
          />
          <meta name="robots" content="nofollow" />
          <meta name="revisit-after" content="1 day" />
          <meta property="”og:type”" content="”website”" />
          <meta property="”og:locale”" content="”pt_BR”" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
