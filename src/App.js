import React from "react";
import Carosel from "./components/Carosel";
import Templates from "./components/Templates";
import Authentication from "./components/Authentication";
import DarkandLight from "./components/DarkandLight";
import RTLandLTR from "./components/RTLandLTR";
import TemplateFeatures from "./components/TemplateFeatures";
import Footer from "./components/Footer";
import ToTheTop from "./components/ToTheTop";
const App = () => {
  return (
    <div className="space-y-16">
      <Carosel />
      <section className="relative pt-[100px] space-y-16">
        <Templates />
        <Authentication />
        <DarkandLight />
        <RTLandLTR />
      </section>
        <TemplateFeatures />
        <ToTheTop />
        <Footer />
    </div>
  );
};

export default App;
