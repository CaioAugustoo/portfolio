import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { Container } from "../styles/global";
import { theme } from "../styles/themes";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
