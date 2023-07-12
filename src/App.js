import React from "react";
// import ReactDOM from "react-dom/client";
import AboutCompany from "./components/AboutCompany";
import Carosel from "./components/Carousel";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import NewServices from "./components/DesignServices";
import MainBanner from "./components/MainBanner"
function App() {
  return (
    <>
    
    <MainBanner/>
    <AboutCompany/>
    <NewServices/>
      <Carosel />
      <ContactSection />
      <Footer />
      </>
  );
}

export default App;
