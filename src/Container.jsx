/* istanbul ignore file */
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/header/Header";
import { Hero } from "./components/main/hero/HeroSection";
import { Footer } from "./components/footer/Footer";
import "./Container.css";

import { BestRecipes } from "./components/main/ourBestRecipes/BestRecipes";
import { BestServices } from "./components/main/bestServices/BestServices";
import { Contact } from "./components/main/contact/Contact";
import { Blog } from "./components/main/blog/Blog";
import { Terms } from "./components/page/Terms";
import { Policy } from "./components/page/Policy";
import { Contactpage } from "./components/page/Contactpage";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);
  return null;
}

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <BestRecipes />
    <BestServices />
    <Blog />
    <Contact />
  </>
);

function Container() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Container;
