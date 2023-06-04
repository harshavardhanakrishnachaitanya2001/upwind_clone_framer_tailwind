import React from "react";
import authentication from "../images/authentication.png";
import { motion } from "framer-motion";

const imageVariants = {
  moveUp: {
    y: -10,
    transition: {
      ease: "easeInOut",
    },
  },
};

const Authentication = () => {
  return (
    <div id="authenticationSection mx-auto">
      <div className=" lg:h-[78px] px-3 androidPhones:py-10 lg:py-0 md:w-screen lg:w-auto">
        <h2 className=" mb-2 androidPhones:mb-0 text-center font-bold tracking-widest text-xl">
          AUTHENTICATION PAGES
        </h2>
      </div>
      <div className="md:gap-y-10 md:flex md:w-screen md:flex-wrap lg:w-full sm:space-y-10 md:space-y-0 mx-auto lg:items-end lg:h-[340px]">
        <div className="md:pr-3 lg:pr-0">
          <motion.img
            src={authentication}
            variants={imageVariants}
            whileHover="moveUp"
            alt=""
            className="rounded-md h-[244px] md:w-full androidPhones:w-full androidPhones:px-0 lg:px-3"
          />
          <p className="mt-6 font-semibold text-center"> LOGIN </p>
        </div>
        <div className="md:pr-3 lg:pr-0">
          <motion.img
            src="https://shreethemes.in/upwind_react/assets/images/demo/signup.png"
            variants={imageVariants}
            whileHover="moveUp"
            alt=""
            className="  h-[244px] md:w-full androidPhones:w-full androidPhones:px-0 lg:px-3 rounded-md"
          />
          <p className="mt-6 font-semibold text-center"> SIGN UP </p>
        </div>
        <div className="md:mx-44 lg:mx-0">
          <motion.img
            src="https://shreethemes.in/upwind_react/assets/images/demo/reset.png"
            variants={imageVariants}
            whileHover="moveUp"
            alt=""
            className="h-[244px] md:w-full androidPhones:w-full lg:w-full androidPhones:px-0 lg:px-3 rounded-md"
          />
          <p className="mt-6 font-semibold text-center"> RESET PASSWORD </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
