import Header from "../components/Header";
import HomeSection from "../components/Home";
import About from "../components/About";
import ScrollTop from "../components/ScrollTop";
import ScrollDown from "../components/ScrollDown";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <ScrollDown />
      <About />
      <ScrollTop />
    </>
  );
}
