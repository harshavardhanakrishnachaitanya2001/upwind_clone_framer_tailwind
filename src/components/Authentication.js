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
      <div className="h-[78px] px-3 androidPhones:my-10 lg:my-0">
        <h2 className=" mb-2 text-center font-bold tracking-widest text-xl">
          AUTHENTICATION PAGES
        </h2>
      </div>
      <div className="lg:flex w-full mx-auto lg:justify-center lg:items-end h-[340px]">
        <div>
          <motion.img
            src={authentication}
            variants={imageVariants}
            whileHover="moveUp"
            alt=""
            className="rounded-md h-[244px] lg:w-[356px] androidPhones:w-full androidPhones:px-0 lg:px-3"
          />
          <p className="mt-6 font-semibold text-center"> LOGIN </p>
        </div>
        <div>
          <motion.img
            src="https://shreethemes.in/upwind_react/assets/images/demo/signup.png"
            variants={imageVariants}
            whileHover="moveUp"
            alt=""
            className=" h-[244px] lg:w-[356px] androidPhones:w-full androidPhones:px-0 lg:px-3 rounded-md"
          />
          <p className="mt-6 font-semibold text-center"> SIGN UP </p>
        </div>
        <div>
          <motion.img
            src="https://shreethemes.in/upwind_react/assets/images/demo/reset.png"
            variants={imageVariants}
            whileHover="moveUp"
            alt=""
            className=" h-[244px] androidPhones:w-full lg:w-[356px] androidPhones:px-0 lg:px-3 rounded-md"
          />
          <p className="mt-6 font-semibold text-center"> RESET PASSWORD </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
