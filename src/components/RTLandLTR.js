import React from "react";
import lightanddark from "../images/lightanddarkmodeimage.png";

const RTLandLTR = () => {
  return (
    <div className=" py-[100px]">
      <div className='px-3 h-[78px]'>
            <h5 className='font-semibold text-xl mb-2 tracking-wider'>RTL & LTR MODE</h5>
        </div>
      <div className="bg-gray-100 flex items-center p-12 justify-evenly text-left">
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
