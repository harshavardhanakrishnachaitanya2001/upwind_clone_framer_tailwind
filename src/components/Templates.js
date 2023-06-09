import React from "react";
import Authentication from "./Authentication";
import { motion } from "framer-motion";
import DarkandLight from "./DarkandLight";
import RTLandLTR from "./RTLandLTR";
const imageVariant = {
  animate: {
    y: -10,
    transition: {
      ease: "easeInOut",
    },
  },
};
const Templates = () => {
  return (
    <div className=" lg:mt-[160px] androidPhones:pt-[300px] sm:pt-[200px] lg:pt-0 text-center androidPhones:w-96 sm:w-10/12 mx-auto">
      <div className="h-[54px] px-3 " id="templatesSeciton">
        <h2 className=" mb-2 text-center font-bold tracking-widest text-xl">
          TEMPLATE DEMOS
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 androidPhones:py-[20px] lg:pt-[50px] lg:pb-[100px]">
        <div className="lg:text-center md:pr-3 lg:mt-12">
          <motion.img
            variants={imageVariant}
            whileHover="animate"
            src="https://shreethemes.in/upwind_react/assets/images/demo/1.png"
            className="rounded-md lg:h-[375px] md:h-[231px] w-full"
            alt=""
          />
          <p className="font-semibold mt-6"> INDEX </p>
        </div>
        <div className="rounded-md text-center md:pr-3 md:mt-0 mt-12">
          <motion.img
            variants={imageVariant}
            whileHover="animate"
            src="https://shreethemes.in/upwind_react/assets/images/demo/2.png"
            className="rounded-md lg:h-[375px] w-full lg:mt-12 md:h-[231px]"
            alt=""
          />
          <p className="font-semibold mt-6"> INDEX TWO </p>
        </div>
        <div className="rounded-md text-center md:pr-3 androidPhones:mt-12">
          <motion.img
            variants={imageVariant}
            whileHover="animate"
            src="https://shreethemes.in/upwind_react/assets/images/demo/3.png"
            className="rounded-md lg:h-[375px] w-full md:h-[231px]"
            alt=""
          />
          <p className="font-semibold mt-6"> INDEX THREE </p>
        </div>
        <div className="rounded-md text-center md:pr-3 mt-12">
          <motion.img
            variants={imageVariant}
            whileHover="animate"
            src="https://shreethemes.in/upwind_react/assets/images/demo/4.png"
            className="rounded-md lg:h-[375px] w-full md:h-[231px]"
            alt=""
          />
          <p className="font-semibold mt-6"> INDEX FOUR </p>
        </div>
        <div className="rounded-md text-center md:pr-3 mt-12">
          <motion.img
            variants={imageVariant}
            initial="initial"
            whileHover="animate"
            src="https://shreethemes.in/upwind_react/assets/images/demo/5.png"
            className="rounded-md lg:h-[375px] w-full md:h-[231px]"
            alt=""
          />
          <p className="font-semibold mt-6"> INDEX FIVE </p>
        </div>
        <div className="rounded-md text-center md:pr-3 mt-12">
          <motion.img
            variants={imageVariant}
            whileHover="animate"
            src="https://shreethemes.in/upwind_react/assets/images/demo/6.png"
            className="rounded-md lg:h-[375px] w-[546px] md:h-[231px]"
            alt=""
          />
          <p className=" font-semibold mt-6"> INDEX SIX</p>
        </div>
        <div className="rounded-md text-center md:pr-3 mt-12">
          <motion.img
            variants={imageVariant}
            whileHover="animate"
            src="https://shreethemes.in/upwind_react/assets/images/demo/7.png"
            className="rounded-md lg:h-[375px] w-full md:h-[231px]"
            alt=""
          />
          <p className="font-semibold mt-6"> INDEX SEVEN</p>
        </div>
        <div className="rounded-md text-center md:pr-3 mt-12">
          <motion.img
            variants={imageVariant}
            whileHover="animate"
            src="https://shreethemes.in/upwind_react/assets/images/demo/8.png"
            className="rounded-md lg:h-[375px] w-full md:h-[231px]"
            alt=""
          />
          <p className="font-semibold mt-6"> INDEX EIGHT</p>
        </div>
      </div>
      <Authentication />
      <DarkandLight />
      <RTLandLTR />
    </div>
  );
};

export default Templates;
