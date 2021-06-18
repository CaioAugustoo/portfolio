import Header from "components/UI/Header";
import Home from "components/Sections/Home";
import AboutSection from "components/Sections/About";
import PortfolioSection from "components/Sections/Portfolio";
import ContactSection from "components/Sections/Contact";

import ScrollTop from "components/UI/ScrollTop";
import Footer from "components/UI/Footer";

import { HomePageProps } from "types/types";

const HomePage = ({ homepages, projects }: HomePageProps) => {
  return (
    <>
      <Header />
      <Home data={homepages[0]} />
      <AboutSection data={homepages[0]} />
      <PortfolioSection data={projects} />
      <ContactSection />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default HomePage;
