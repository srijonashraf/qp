import React from "react";
import { NavLink } from "react-router-dom";

const RegistrationFrom = () => {
  return (
    <div className="w-full lg:max-w-[415px] bg-white rounded-md p-6">
      <form action="" className="flex flex-col gap-3">
        <h3 className="font-[700] text-brand-primary text-xl">
          Register your Account
        </h3>
        <div className="flex flex-row gap-2">
          <div className="w-full flex flex-col">
            <label htmlFor="" className="font-semibold text-sm font-manrope">
              First Name
            </label>
            <input
              type="text"
              className="w-full p-2 rounded border border-slate-400 outline-none focus:border-2"
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="" className="font-semibold text-sm font-manrope">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-2 rounded border border-slate-400 outline-none focus:border-2"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="font-semibold text-sm font-manrope">
            Email Address
          </label>
          <input
            type="email"
            className="w-full p-2 rounded border border-slate-400 outline-none focus:border-2"
          />
        </div>
        <div>
          <label htmlFor="" className="font-semibold text-sm font-manrope">
            Password
          </label>
          <input
            type="password"
            className="w-full p-2 rounded border border-slate-400 outline-none focus:border-2"
          />
        </div>
        {/* ToDo: Day, Month and Year will be separated */}
        <div className="flex flex-col">
          <label htmlFor="" className="font-semibold text-sm font-manrope">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full p-2 rounded border border-slate-400 outline-none focus:border-2 font-inter font-medium text-sm"
          />
        </div>
        {/* ToDo: Country code will be added */}
        <div className="flex flex-col">
          <label htmlFor="" className="font-semibold text-sm font-manrope">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full p-2 rounded border border-slate-300 outline-none focus:border-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="font-semibold text-sm font-manrope">
            Your Gender
          </label>
          <select
            name="gender"
            id="gender"
            className="w-full p-2 rounded border border-slate-300 outline-none focus:border-2 
            font-inter font-normal text-sm"
          >
            <option selected>Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="flex items-center gap-1">
          <input type="checkbox" name="allow_terms" id="" />
          <p className="text-[13px] font-manrope font-[400]">
            I accept the{" "}
            <span className="font-semibold text-brand-primary text-[13px]">
              Terms and Conditions{" "}
            </span>
            of this website
          </p>
        </div>
        <div>
          <button
            className="w-full bg-brand-primary py-[6px] px-[12px] 
        rounded-[4px] text-white font-manrope font-semibold text-base my-2"
          >
            Complete Registration!
          </button>
          <div className="flex flex-col items-center mt-[6px] gap-2">
            <p className="font-manrope text-sm font-medium text-slate-500">
              <span>_____</span> or sign up with <span>_____</span>
            </p>
            <p className="font-manrope text-sm font-normal">
              Already have an Account?
              <span>
                <NavLink
                  to="/login"
                  className="font-manrope text-sm text-brand-primary font-bold"
                >
                  {" "}
                  Login here
                </NavLink>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFrom;
