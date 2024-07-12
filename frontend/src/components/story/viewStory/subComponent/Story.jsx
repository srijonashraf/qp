import React from "react";
import userPortrait from "../../../../assets/image/portrait.jpg";
import RightArrowIcon from "../../../../assets/icons/newsfeed/RightArrowIcon";
import LeftArrowIcon from "../../../../assets/icons/newsfeed/LeftArrowIcon";
import "./story.css";
import { useNavigate } from "react-router-dom";
import HeartIcon from "../../../../assets/icons/newsfeed/HeartIcon";
import AngryIcon from "../../../../assets/icons/newsfeed/AngryIcon";
import WowIcon from "../../../../assets/icons/newsfeed/WowIcon";
import LikeBlueIcon from "../../../../assets/icons/newsfeed/LikeBlueIcon";
import HahaIcon from "../../../../assets/icons/newsfeed/HahaIcon";
import SadIcon from "../../../../assets/icons/newsfeed/SadIcon";

const Story = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black h-screen flex items-center justify-center relative">
      <div
        className="bg-white rounded-full p-2 absolute top-4 right-4 z-50 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x "
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </div>
      <div className="border bg-white h-[90vh] lg:w-3/6 md:w-3/4 w-full max-sm:h-screen overflow-hidden relative">
        <LeftArrowIcon className="text-gray-800 z-50 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
        <RightArrowIcon className="text-gray-800 z-50 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
        <div className="absolute top-0 left-0 w-0 h-1 bg-brand-primary animate-slider"></div>

        <div className="px-2 overflow-x-auto flex absolute bottom-2 items-center w-full">
          <input
            type="text"
            placeholder="Reply"
            className=" bg-body-base-color/50 h-10 p-3 rounded-lg
              placeholder:text-white w-full"
          />
          <div className="flex items-center">
            <LikeBlueIcon />
            <HeartIcon />
            <HahaIcon />
            <WowIcon />
            <SadIcon />
            <AngryIcon />
          </div>
        </div>
        <img src={userPortrait} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Story;
