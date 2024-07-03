import React from "react";

const Welcome = () => {
  return (
    <div className="w-full max-w-[750px]">
      <p
        className="font-semibold text-[52px] leading-[70px] font-inter 
      text-white mb-4 max-sm:text-[22px] max-sm:leading-7 text-left"
      >
        Welcome to the first decentralised Social Network in the world
      </p>
      <p
        className="font-medium text-[16px] leading-[27px] font-poppins 
      text-white max-sm:font-light max-sm:leading-[18px] max-sm:text-[12px]"
      >
        We are the only decentralised social network that gives opportunity to
        monetise your time even if you are a normal user who doesn’t create any
        content and use the earning to buy any service or goods from the native
        marketplace.
      </p>
      <button
        className="bg-brand-primary px-[20px] py-[16px] 
      rounded-lg mt-6 text-white font-semibold text-xl font-raleway"
      >
        Register Now!
      </button>
    </div>
  );
};

export default Welcome;
