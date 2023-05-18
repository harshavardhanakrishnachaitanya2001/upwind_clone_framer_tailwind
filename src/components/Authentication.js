import React from "react";
import authentication from "../images/authentication.png";
import {motion} from 'framer-motion'

const imageVariants = {
  moveUp:{
    y:-10,
    transition:{
      ease:"easeInOut",
    }
  }
}

const Authentication = () => {
  return (
    <div id="authenticationSection">
      <div className="h-[78px] px-3">
        <h2 className=" mb-2 text-center font-bold tracking-widest text-xl">
          AUTHENTICATION PAGES
        </h2>
      </div>
      <div className="flex w-full mx-auto justify-center items-end h-[340px]">
        <div>
          <motion.img
            src={authentication}
            variants = {imageVariants}
            whileHover="moveUp"
            alt=""
            className="rounded-md h-[244px] w-[356px] px-3"
          />
          <p className="mt-6 font-semibold text-center"> LOGIN </p>
        </div>
        <div>
          <motion.img
            src="https://shreethemes.in/upwind_react/assets/images/demo/signup.png"
            variants = {imageVariants}
            whileHover="moveUp"
            alt=""
            className=" h-[244px] w-[356px] px-3 rounded-md"
          />
          <p className="mt-6 font-semibold text-center"> SIGN UP </p>
        </div>
        <div>
          <motion.img
            src="https://shreethemes.in/upwind_react/assets/images/demo/reset.png"
            variants = {imageVariants}
            whileHover="moveUp"
            alt=""
            className=" h-[244px] w-[356px] px-3 rounded-md"
          />
          <p className="mt-6 font-semibold text-center"> RESET PASSWORD </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
