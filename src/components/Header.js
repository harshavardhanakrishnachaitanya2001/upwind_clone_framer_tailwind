import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logoDark from "../images/logo-dark.png";
import originalLogo from "../images/logo.png";

const Header = () => {
  const [logo, setLogo] = useState(originalLogo);
  const [bgColor, setBgColor] = useState("transparent");
  const { scrollYProgress } = useScroll();
  const [linkColor, setLinkColor] = useState("#fff");
  const [homeHover, setHomeHover] = useState(false);
  const [demosHover, setDemosHover] = useState(false);
  const [featuresHover, setFeaturesHover] = useState(false);
  const [supportHover, setSupportHover] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change",(value) => {
      if (value > 0) {
        setLogo(logoDark);
        setLinkColor("#000");
        setBgColor("#fff");
      } else {
        setLogo(originalLogo);
        setLinkColor("#fff");
        setBgColor("transparent");
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      style={{
        backgroundColor: bgColor,
        transition:
          "background-color 0.3s ease-in-out, opacity 0.3s ease-in-out",
      }}
      className="fixed z-50 top-0 flex w-full justify-evenly leading-6 px-3"
    >
      <a
        href="https://www.google.com"
        className="font-bold text-2xl py-1 leading-[68px]"
      >
        <p className="text-[#ff5e14] box-border cursor-pointer inline-block text-[24px] font-bold leading-68">
          <img src={logo} alt="logo" className="h-[24px] inline-block" />
        </p>
      </a>

      {/* Navigation links */}
      <div className="py-1 ml-2 mr-3 space-x-4 flex items-center">
        <ul className="flex space-x-8 font-semibold text-sm">
          <motion.li
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="cursor-pointer"
            style={{ color: homeHover ? "#fb663d" : linkColor, transition: "color 0.2s ease-in-out" }}
          >
            HOME
          </motion.li>
          <motion.li
            onMouseEnter={() => setDemosHover(true)}
            onMouseLeave={() => setDemosHover(false)}
            onClick={() => {
              document.getElementById("templatesSeciton").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="cursor-pointer"
            style={{ color: demosHover ? "#fb663d" : linkColor, transition: "color 0.2s ease-in-out" }}
          >
            DEMOS
          </motion.li>
          <motion.li
            onMouseEnter={() => setFeaturesHover(true)}
            onMouseLeave={() => setFeaturesHover(false)}
            onClick={() => {
              document.getElementById("featuresSection").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="cursor-pointer"
            style={{ color: featuresHover ? "#fb663d" : linkColor, transition: "color 0.2s ease-in-out" }}
          >
            FEATURE
          </motion.li>
          <motion.li
            onMouseEnter={() => setSupportHover(true)}
            onMouseLeave={() => setSupportHover(false)}
            className="cursor-pointer"
            style={{ color: supportHover ? "#fb663d" : linkColor, transition: "color 0.2s ease-in-out" }}
          >
            SUPPORT
          </motion.li>
        </ul>
        <a
          href="https://themeforest.net/item/upwind-react-tailwind-landing-page-template/45035952?irgwc=1&clickid=U64xwEX%3ApxyNTLITA1zGq32DUkAX2Kxk90T1X00&iradid=275988&irpid=3221927&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_3221927&utm_medium=affiliate&utm_source=impact_radius"
          className="text-[rgb(13,110,153)] cursor-pointer inline"
        >
          <p className="flex items-center font-semibold gap-1 py-2 px-5 outline-none tracking-[0.5px] rounded-md bg-[#fb663d] border-[#fb663d] text-white">
            <AiOutlineShoppingCart className="align-middle italic w-[15px] h-[15px]" />
            Download
          </p>
        </a>
      </div>
    </motion.div>
  );
};

export default Header;
