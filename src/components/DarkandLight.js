import React from "react";
import lightanddark from "../images/lightanddarkmodeimage.png";

const DarkandLight = () => {
  return (
    <div className="w-full sm:pt-[700px] md:pt-[100px] lg:py-[100px] androidPhones:pt-[600px]">
      <div className="px-3 sm:h-[78px]">
        <h5 className="md:text-center font-semibold text-xl androidPhones:mb-4 lg:mb-2 tracking-wider">
          DARK & LIGHT MODE
        </h5>
      </div>
      <div className=" bg-gray-100 lg:flex lg:items-center p-12 justify-evenly">
        <div className="text-left space-y-2 sm:px-0 lg:px-3">
          <h1 className=" md:text-center lg:text-left font-semibold text-2xl androidPhones:pb-5 md:pb-0 md:mb-3">
            Light and Dark version
          </h1>
          <div>
            <p className="lg:text-left androidPhones:pb-10 sm:text-xl lg:pb-0 lg:pr-10 androidPhones:pr-0 androidPhones:text-sm androidPhones:text-center text-gray-400 lg:text-xl">
              Upwind provides fully responsive a choice to choose Light & Dark
              mode managed with css based.
            </p>
          </div>
        </div>
        <div className="px-3 w-full">
          <img src={lightanddark} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DarkandLight;
