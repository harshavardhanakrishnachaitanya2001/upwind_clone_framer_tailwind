import React from "react";
import { MdArrowUpward } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
const ToTheTop = () => {
  const { scrollYProgress } = useScroll(); // destructuring the position of the vertical scroll bar
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]); //When the scroll bar position (the scrollYProgress variable) changes from 0 to 0.1, the opacity changes from 0 to 1

  return (
    // Assigning the opacity variable to the opacity style key on line 13
    <motion.button
      style={{
        opacity: opacity,
      }}
      onClick={() => {
        window.scrollTo({
          top: 0, // Using the window.scrollTo() method to scroll to the top of the page
          behavior: "smooth", // Using the behavior option to make the scroll smooth
        });
      }}
      className=" lg:mb-3 androidPhones:mb-9"
    >
      <MdArrowUpward className="sm:left-[87%] androidPhones:left-[85%] sm:top-[88%] lg:mt-6 lg:right-0  z-50 fixed text-white rounded-full p-2 text-4xl bg-[#ff5e14]" />
    </motion.button>
  );
};

export default ToTheTop;
