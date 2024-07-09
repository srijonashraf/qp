import React from "react";
import StoryImageIcon from "../../../assets/icons/story/StoryImageIcon";
import StoryTextIcon from "../../../assets/icons/story/StoryTextIcon";
import { useNavigate } from "react-router-dom";
const SelectStoryType = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center bg-white p-6 rounded-md lg:w-[40%] md:w-[75%]">
      <p className="font-poppins font-semibold text-base mb-3 text-left">
        Select Story Type
      </p>
      <div className="bg-body-base-color/15 flex gap-2 items-center rounded-md justify-center z-50 p-5 w-full">
        <div
          className=" h-[250px] lg:h-[350px] w-full cursor-pointer rounded  p-2 flex items-center justify-center flex-col 
        shadow-sm bg-gradient-to-t from-[#F25268] to-[#FD1EBE]"
          onClick={() => navigate("/photo-story")}
        >
          <div className="flex flex-col items-center w-full gap-2">
            <StoryImageIcon className="max-sm:w-12" />
            <p className="font-poppins font-semibold text-base text-center text-white max-sm:text-sm">
              Create Your Photo Story
            </p>
          </div>
        </div>
        <div
          className=" h-[250px] lg:h-[350px] w-full cursor-pointer rounded p-2 flex items-center justify-center flex-col 
        shadow-sm bg-gradient-to-t from-[#136CAC] to-[#59DDDD]"
          onClick={() => navigate("/text-story")}
        >
          <div className="flex flex-col items-center w-full gap-2">
            <StoryTextIcon className="max-sm:w-12" />
            <p className="font-poppins font-semibold text-base text-center text-white max-sm:text-sm">
              Create Your Text Story
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectStoryType;
