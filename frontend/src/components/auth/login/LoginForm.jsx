import React from "react";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="w-full lg:max-w-[415px] bg-white rounded-md p-6">
      <form action="" className="flex flex-col gap-3">
        <h3 className="font-[700] text-brand-primary text-xl">
          Login to your Account
        </h3>
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
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="token_persist" id="" />
              <p className="text-sm font-manrope font-[400]">Remember Me</p>
            </div>
            <p className="text-brand-primary font-manrope font-bold text-[12px]">
              Forget Password
            </p>
          </div>
        </div>
        <button
          className="w-full bg-brand-primary py-[6px] px-[12px] 
        rounded-[4px] text-white font-manrope font-semibold text-base"
        >
          Login
        </button>
        <div className="flex flex-col items-center mt-[6px] gap-2">
          <p className="font-manrope text-sm font-medium text-slate-500">
            <span>_____</span> or sign up with <span>_____</span>
          </p>
          <p className="font-manrope text-sm font-normal">
            Don't have an Account?
            <span>
              <NavLink
                to="/registration"
                className="font-manrope text-sm text-brand-primary font-bold"
              >
                {" "}
                Sign up here
              </NavLink>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
