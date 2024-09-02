import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/globals";
import theme from "../styles/theme/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Caio Augusto | Platform Engineer</title>
        <meta name="title" content="Caio Augusto | Platform Engineer" />
        <meta
          name="description"
          content="Platform Engineer"
        />
        <meta
          name="google-site-verification"
          content="u6Vdueaj4zUT5QC9kQe57N0BopUpzrTN9HxiHTOZIBo"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://caioaugusto.dev" />
        <meta
          property="og:title"
          content="Caio Augusto | Platform Engineer"
        />
        <meta
          name="theme-color"
          content="#4C30F5;
"
        />
        <meta name="background-color" content="#040413" />
        <meta
          property="og:description"
          content="Platform Engineer"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://caioaugusto.dev" />
        <meta
          property="twitter:title"
          content="Caio Augusto | Platform Engineer"
        />
        <meta
          property="twitter:description"
          content="Platform Engineer"
        />
        <meta
          name="keywords"
          content="Platform Engineer, SRE, back-end front-end, developer front-end, ui ux designer, graphic designer,
            developer front-end freelancer, developer reactjs, developer javascript,
            javascript, react, reactjs, typescript, strapi, api, dev, nextjs, cypress, tests,
            caioaugusto, caioaugusto, caiohtml, caio augusto, freelancer, freela"
        />
        <meta name="robots" content="nofollow" />
        <meta name="revisit-after" content="1 day" />
        <meta property="”og:type”" content="”website”" />
        <meta property="”og:locale”" content="”en_US”" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default App;
