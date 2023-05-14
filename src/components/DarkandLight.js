import React from "react";
import lightanddark from "../images/lightanddarkmodeimage.png";

const DarkandLight = () => {
  return (
    <div className="space-y-16 ">
      <h1 className="text-center px-3 mb-2 font-bold text-xl tracking-wider">
        DARK AND LIGHT MODE
      </h1>
      <div className="w-1/2 mx-auto bg-gray-100 flex items-center p-12 justify-evenly">
        <div className="space-y-2 px-3">
          <h1 className="font-semibold text-2xl">Light and Dark version</h1>
          <p className="text-gray-400 text-xl">
            Upwind provides fully responsive a choice to choose Light & Dark
            mode managed with css based.
          </p>
        </div>
        <div className="px-3 w-full">
          <img src={lightanddark} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DarkandLight;
