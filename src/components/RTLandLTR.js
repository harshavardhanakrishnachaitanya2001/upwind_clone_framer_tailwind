import React from "react";
import RTLANDLTR from "../images/RTL&LTR.png";

const RTLandLTR = () => {
  return (
    <div className=" py-[100px]">
      <div className="px-3 h-[78px]">
        <h5 className="font-semibold text-xl mb-2 tracking-wider">
          RTL & LTR MODE
        </h5>
      </div>
      <div className=" bg-gray-100 flex lg:flex-row androidPhones:flex-col-reverse items-center p-12 justify-evenly lg:text-left androidPhones:text-center">
        <div className="px-3 w-full">
          <img src={RTLANDLTR} alt="" />
        </div>
        <div className="space-y-2 px-3">
          <h1 className="font-semibold text-xl">RTL & LTR version</h1>
          <p className=" androidPhones:text-sm androidPhones:py-10 lg:py-0 text-gray-400 lg:text-xl">
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
