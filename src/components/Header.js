import React from "react";
import logo from "../images/logo.png";
import { motion, useScroll,useTransform } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(scrollYProgress, [0, 0.1], ["", "#fff"]);
  
  return (
    <motion.div style={{backgroundColor}} className="fixed z-50 top-0 flex w-full justify-evenly leading-6 px-3">
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
        <ul className="flex space-x-8 text-white font-semibold text-sm bg">
          <motion.li
            className="cursor-pointer"
            
            
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            whileHover={{ color: "#ff5e14", transition: { ease: "easeInOut" } }}
          >
            HOME
          </motion.li>
          <motion.li
            onClick={() => {
              document
                .getElementById("templatesSeciton")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer"
            
            whileHover={{ color: "#ff5e14", transition: { ease: "easeInOut" } }}
          >
            DEMOS
          </motion.li>
          <motion.li
            className="cursor-pointer"
            
            onClick={() => {
              document
                .getElementById("featuresSection")
                .scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ color: "#ff5e14", transition: { ease: "easeInOut" } }}
          >
            FEATURE
          </motion.li>
          <motion.li
            className="cursor-pointer"
            
            whileHover={{ color: "#ff5e14", transition: { ease: "easeInOut" } }}
          >
            SUPPORT
          </motion.li>
        </ul>
        <a
          href="https://themeforest.net/item/upwind-react-tailwind-landing-page-template/45035952?irgwc=1&clickid=U64xwEX%3ApxyNTLITA1zGq32DUkAX2Kxk90T1X00&iradid=275988&irpid=3221927&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_3221927&utm_medium=affiliate&utm_source=impact_radius"
          className="text-[rgb(13,110,153)] cursor-pointer inline"
        >
          <p className="inline-block py-2 px-5 outline-none tracking-[0.5px] rounded-md bg-[#fb663d] border-[#fb663d] text-white">
            Download
          </p>
        </a>
      </div>
    </motion.div>
  );
};

export default Header;
