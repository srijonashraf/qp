import React from "react";
import Welcome from "../components/auth/registration/Welcome";
import RegistrationFrom from "../components/auth/registration/RegistrationForm";

const Registration = () => {
  return (
    <div className="bg-brand-secondary">
      <div
        className="min-h-screen py-12 flex flex-col items-center 
        lg:justify-around justify-center mx-auto 
        w-full max-w-[80%] lg:flex-row gap-12 max-sm:max-w-[90%] max-sm:gap-8"
      >
        <Welcome />
        <RegistrationFrom />
      </div>
    </div>
  );
};

export default Registration;
