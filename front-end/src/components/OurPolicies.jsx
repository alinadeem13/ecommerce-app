import React from "react";
import { assets } from "../assets/assets";

const OurPolicies = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          alt="Exchange Icon"
          className="m-auto w-12 mb-5"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We Offer Hassle Free Exhange Policy</p>
      </div>

      <div>
        <img
          src={assets.quality_icon}
          alt="Exchange Icon"
          className="m-auto w-12 mb-5"
        />
        <p className="font-semibold">7 days return Policy</p>
        <p className="text-gray-400">We provide 7 days free return Policy</p>
      </div>

      <div>
        <img
          src={assets.support_img}
          alt="Exchange Icon"
          className="m-auto w-12 mb-5"
        />
        <p className="font-semibold">Best Customer Supoort Exchange Policy</p>
        <p className="text-gray-400">We provide 24/7 ustomer support</p>
      </div>
    </div>
  );
};

export default OurPolicies;
