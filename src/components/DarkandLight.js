import React from "react";
import lightanddark from "../images/lightanddarkmodeimage.png";

const DarkandLight = () => {
  return (
    <div className="w-full lg:py-[100px] androidPhones:pt-[600px]">
      <div className="px-3 h-[78px]">
        <h5 className="font-semibold text-xl mb-2 tracking-wider">
          DARK & LIGHT MODE
        </h5>
      </div>
      <div className=" bg-gray-100 lg:flex lg:items-center p-12 justify-evenly">
        <div className="text-left space-y-2 px-3">
          <h1 className="font-semibold text-2xl androidPhones:pb-5 lg:pb-0">
            Light and Dark version
          </h1>
          <div>
            <p className="lg:text-left androidPhones:pb-10 lg:pb-0 lg:pr-10 androidPhones:pr-0 androidPhones:text-sm androidPhones:text-center text-gray-400 lg:text-xl">
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
