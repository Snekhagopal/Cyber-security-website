import React from "react";
import HomeBanner from "./HomeBanner";
import AboutCompany from "./AboutCompany";
// import CarouselSlide from "./CarouselDetails";
import Carosel from "./Carousel";
import Contact from "./Contact";
import Footer from "./Footer";
import Services from "./Services";
// import AboutCompanyNew from "./AboutCompanyNew";
function Home() {
  return (
    <>
    <HomeBanner/>
    <AboutCompany/>
    <Services/>
      <Carosel />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
