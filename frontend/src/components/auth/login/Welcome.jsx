import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[750px] flex flex-col gap-5">
      <p
        className="font-semibold text-[52px] leading-[70px] font-inter 
      text-white max-sm:text-[22px] max-sm:leading-7 text-left"
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
      rounded-lg text-white font-semibold text-xl font-raleway self-start hover:bg-brand-primary/80"
        onClick={() => navigate(`/registration`)}
      >
        Register Now!
      </button>
    </div>
  );
};

export default Welcome;
