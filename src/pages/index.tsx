import Header from "components/Header/index";
import Main from "components/MainSection/index";
import AboutSection from "components/AboutSection/index";
import PortfolioSection from "components/PortfolioSection/index";
import ContactSection from "components/ContactSection/index";
import Footer from "components/Footer/index";
import ScrollTop from "components/ScrollTop/index";

import GlobalStyles from "styles/globals";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <ScrollTop />
      <GlobalStyles />
    </>
  );
};

export default Home;
