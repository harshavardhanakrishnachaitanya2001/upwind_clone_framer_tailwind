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
  const [iconClicked, setIconClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
      setBgColor("#fff");
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value > 0 || isSmallScreen) {
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
  }, [scrollYProgress, isSmallScreen]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      style={{
        backgroundColor: bgColor,
        transition:
          "background-color 0.3s ease-in-out, opacity 0.3s ease-in-out",
      }}
      className="bg-transparent fixed z-50 top-0 flex w-full androidPhones:justify-between lg:justify-evenly leading-6 px-3"
    >
      <a
        href="https://www.google.com"
        className="sm:pl-10 font-bold text-2xl py-1 leading-[68px]"
      >
        <p className="text-[#ff5e14] box-border cursor-pointer inline-block text-[24px] font-bold leading-68">
          <img src={logo} alt="logo" className="h-[24px] inline-block" />
        </p>
      </a>

      {/* Navigation links */}
      {/* mobile menu */}
      <div className="androidPhones:space-x-2 py-1 lg:ml-2 androidPhones:mr-3 sm:mr-10 lg:space-x-4 flex items-center">
        <div
          onClick={() => setIconClicked(!iconClicked)}
          className=" w-full space-y-1.5 items-end flex flex-col lg:hidden right-0 justify-center"
        >
          <motion.span
            animate={
              iconClicked
                ? { rotate: 45, y:9,x:1, transition:{duration:0.3} }
                : { rotate: 0, transition:{duration:0.4} }
            }
            className="bg-black w-7 h-0.5"
          ></motion.span>
          <motion.span
            animate={iconClicked ? { opacity: 0 } : { opacity: 1 }}
            className="bg-black w-7 h-0.5"
          ></motion.span>
          <motion.span
            animate={
              iconClicked
                ? { rotate: -45,  y:-7, x:-1, transition:{duration:0.3} }
                : { rotate: 0, transition:{duration:0.4} }
            }
            className="bg-black w-7 h-0.5"
          ></motion.span>
        </div>
        {iconClicked ? (
          <ul
            className={
              iconClicked
                ? "androidPhones:space-y-2 lg:space-y-0 lg:flex lg:space-x-8 font-semibold text-sm"
                : "androidPhones:space-y-2 lg:space-y-0 androidPhones:hidden lg:flex lg:space-x-8 font-semibold text-sm"
            }
          >
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
              style={{
                color: homeHover ? "#fb663d" : linkColor,
                transition: "color 0.2s ease-in-out",
              }}
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
              style={{
                color: demosHover ? "#fb663d" : linkColor,
                transition: "color 0.2s ease-in-out",
              }}
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
              style={{
                color: featuresHover ? "#fb663d" : linkColor,
                transition: "color 0.2s ease-in-out",
              }}
            >
              FEATURE
            </motion.li>
            <motion.li
              onMouseEnter={() => setSupportHover(true)}
              onMouseLeave={() => setSupportHover(false)}
              className="cursor-pointer"
              style={{
                color: supportHover ? "#fb663d" : linkColor,
                transition: "color 0.2s ease-in-out",
              }}
            >
              SUPPORT
            </motion.li>
          </ul>
        ) : (
          <ul
            className={
              iconClicked
                ? "bg-white text-black androidPhones:space-y-2 lg:space-y-0 lg:flex lg:space-x-8 font-semibold text-sm"
                : "androidPhones:space-y-2 lg:space-y-0 androidPhones:hidden lg:flex lg:space-x-8 font-semibold text-sm"
            }
          >
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
              style={{
                color: homeHover ? "#fb663d" : linkColor,
                transition: "color 0.2s ease-in-out",
              }}
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
              style={{
                color: demosHover ? "#fb663d" : linkColor,
                transition: "color 0.2s ease-in-out",
              }}
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
              style={{
                color: featuresHover ? "#fb663d" : linkColor,
                transition: "color 0.2s ease-in-out",
              }}
            >
              FEATURE
            </motion.li>
            <motion.li
              onMouseEnter={() => setSupportHover(true)}
              onMouseLeave={() => setSupportHover(false)}
              className="cursor-pointer"
              style={{
                color: supportHover ? "#fb663d" : linkColor,
                transition: "color 0.2s ease-in-out",
              }}
            >
              SUPPORT
            </motion.li>
          </ul>
        )}
        <a
          href="https://themeforest.net/item/upwind-react-tailwind-landing-page-template/45035952?irgwc=1&clickid=U64xwEX%3ApxyNTLITA1zGq32DUkAX2Kxk90T1X00&iradid=275988&irpid=3221927&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_3221927&utm_medium=affiliate&utm_source=impact_radius"
          className="text-[rgb(13,110,153)] cursor-pointer inline"
        >
          <p className="flex androidPhones:w-full androidPhones:h-full md:gap-2 lg:w-auto items-center font-semibold lg:gap-1 androidPhones:p-2 lg:py-2 lg:px-5 outline-none tracking-[0.5px] rounded-md bg-[#fb663d] border-[#fb663d] text-white">
            <AiOutlineShoppingCart className="align-middle italic w-[15px] h-[15px]" />
            <span className="androidPhones:hidden md:block md:font-normal lg:block">Download</span>
          </p>
        </a>
      </div>
    </motion.div>
  );
};

export default Header;
