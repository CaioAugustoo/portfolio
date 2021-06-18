import { GetStaticProps } from "next";

import Header from "components/UI/Header";
import Home from "components/Sections/Home";

import { GET_HOME_PAGE } from "graphql/queries";
import client from "graphql/client";

import GlobalStyles from "styles/globals";
import AboutSection from "components/Sections/About";
import PortfolioSection from "components/Sections/Portfolio";
import ContactSection from "components/Sections/Contact";
import Footer from "components/UI/Footer";
import ScrollTop from "components/UI/ScrollTop";

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
      <GlobalStyles />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { homepages, projects } = await client.request(GET_HOME_PAGE);

  return {
    props: {
      homepages,
      projects,
    },
    revalidate: 600,
  };
};
