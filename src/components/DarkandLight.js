import React from "react";
import lightanddark from "../images/lightanddarkmodeimage.png";

const DarkandLight = () => {
  return (
    <div className="w-full py-[100px]">
      <div className="px-3 h-[78px]">
        <h5 className="font-semibold text-xl mb-2 tracking-wider">
          DARK & LIGHT MODE
        </h5>
      </div>
      <div className=" bg-gray-100 flex items-center p-12 justify-evenly">
        <div className="text-left space-y-2 px-3 w-1/2">
          <h1 className="font-semibold text-2xl">Light and Dark version</h1>
          <p className="text-gray-400 text-xl">
            Upwind provides fully responsive a choice to choose Light & Dark
            mode managed with css based.
          </p>
        </div>
        <div className="px-3 w-full">
          <img src={lightanddark} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DarkandLight;
