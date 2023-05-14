import React from "react";
import lightanddark from "../images/lightanddarkmodeimage.png";

const RTLandLTR = () => {
  return (
    <div className="space-y-16">
      <h1 className="text-center px-3 mb-2 font-bold text-xl tracking-wider">
        RTL & LTR
      </h1>
      <div className="w-1/2 mx-auto bg-gray-100 flex items-center p-12 justify-evenly">
        <div className="px-3 w-full">
          <img src={lightanddark} alt="" />
        </div>
        <div className="space-y-2 px-3">
          <h1 className="font-semibold text-xl">RTL & LTR version</h1>
          <p className="text-gray-400 text-xl">
            Upwind provides fully responsive a choice to choose LTR or RTL
            version supported in both Light and Dark mode managed with CSS
            based.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RTLandLTR;
