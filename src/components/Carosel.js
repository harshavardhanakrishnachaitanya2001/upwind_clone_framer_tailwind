import React from "react";
import icon from "../images/icon.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import Header from "./Header";
import { motion } from "framer-motion";
import scss from "../images/scss.png";
import css from "../images/css.png";
import yarn from "../images/yarn.png";

const iconVariant = {
  spinning: {
    rotate: 360,
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Carosel = () => {
  return (
    // returning jsx
    <div className=" h-[700px] bg-backgroundImage">
      {/* Carosla container */}
      <div className=" w-full h-full">
        <header className=" bg-backgroundColor relative bg-opacity-80 text-[rgb(22, 28, 45)] mx-auto leading-6 mb-5 bg-backgroundColor w-full h-full">
          {/* Header component*/}
          <Header />

          {/* icon and text */}
          <div className="flex justify-center items-center pt-72 androidPhones:pb-[172px] lg:pb-[180px]">
            <div className="text-center text-white font-bold  leading-normal">
              <motion.img
                variants={iconVariant}
                animate="spinning"
                src={icon}
                alt=""
                className="mx-auto h-20 w-20"
              />
              <p className=" mt-8 font-semibold lg:text-4xl androidPhones:text-3xl androidPhones:px-1 lg:px-0">
                Upwind - React Tailwind Landing Page Template
              </p>
              <p className="mt-6 font-semibold lg:text-base androidPhones:text-xl androidPhones:px-1 lg:px-0">
                (Light & Dark + LTR & RTL Theme Available)
              </p>
            </div>
          </div>

          {/* Concepts links */}
          <div className="relative lg:pb-[50px]">
            <div className="androidPhones:border-b lg:border-none androidPhones:px-3 flex-wrap lg:px-0 androidPhones:py-6 lg:py-0 container lg:pb-[100px] flex mx-auto justify-center w-full absolute text-center top-0 right-0 left-0">
              <p className="cursor-pointer" title="React JS">
                <img
                  src={react}
                  alt=""
                  className="max-w-full h-[72px] w-[72px] p-2 bg-white rounded-full shadow-lg androidPhones:m-2 androidPhones:p-2 lg:p-0 lg:my-0 lg:mx-2 align-middle "
                />
              </p>
              <p className="cursor-pointer" title="Tailwind CSS">
                <img
                  src={tailwind}
                  alt=""
                  className="max-w-full h-[72px] w-[72px] p-2 bg-white rounded-full shadow-lg androidPhones:m-2 androidPhones:p-2 lg:p-0 lg:my-0 lg:mx-2 align-middle "
                />
              </p>
              <p className="cursor-pointer" title="SAAS">
                <img
                  src={scss}
                  alt=""
                  className="max-w-full h-[72px] w-[72px] p-2 bg-white rounded-full shadow-lg androidPhones:m-2 androidPhones:p-2 lg:p-0 lg:my-0 lg:mx-2 align-middle "
                />
              </p>
              <p className="cursor-pointer" title="CSS 3">
                <img
                  src={css}
                  alt=""
                  className="max-w-full h-[72px] w-[72px] p-2 bg-white rounded-full shadow-lg androidPhones:m-2 androidPhones:p-2 lg:p-0 lg:my-0 lg:mx-2 align-middle "
                />
              </p>
              <p className="cursor-pointer" title="Yarn">
                <img
                  src={yarn}
                  alt=""
                  className="max-w-full h-[72px] w-[72px] p-2 bg-white rounded-full shadow-lg androidPhones:m-2 androidPhones:p-2 lg:p-0 lg:my-0 lg:mx-2 align-middle "
                />
              </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Carosel;
