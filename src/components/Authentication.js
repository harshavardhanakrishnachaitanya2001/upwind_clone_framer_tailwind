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
    <div id="authenticationSection" className="mx-auto space-y-16">
      <h1 className="text-center font-bold text-xl tracking-wider">
        AUTHENTICATION PAGES
      </h1>
      <div className="w-1/2 grid text-center grid-cols-3 gap-5 mx-auto justify-content-center ">
        <div className="w-full">
          <motion.img
            src={authentication}
            variants = {imageVariants}
            whileHover="moveUp"
            alt=""
            className="rounded-md w-full"
          />
          <p className="mt-6 font-semibold text-center"> LOGIN </p>
        </div>
        <div className="w-full">
          <motion.img
            src={authentication}
            variants = {imageVariants}
            whileHover="moveUp"
            alt=""
            className="rounded-md w-full"
          />
          <p className="mt-6 font-semibold text-center"> REGISTER </p>
        </div>
        <div>
          <motion.img
            src={authentication}
            variants = {imageVariants}
            whileHover="moveUp"
            alt=""
            className="rounded-md w-full"
          />
          <p className="mt-6 font-semibold text-center"> FORGOT PASSWORD </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
