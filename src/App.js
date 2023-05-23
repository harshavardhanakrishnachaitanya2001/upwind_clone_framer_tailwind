import React from "react";
import Carosel from "./components/Carosel";
import Templates from "./components/Templates";
import TemplateFeatures from "./components/TemplateFeatures";
import Footer from "./components/Footer";
import ToTheTop from "./components/ToTheTop";
const App = () => {
  return (
    <div className="">
      <Carosel />
      <section className="relative">
        <Templates />
      </section>
      <TemplateFeatures />
      <ToTheTop />
      <Footer />
    </div>
  );
};

export default App;
