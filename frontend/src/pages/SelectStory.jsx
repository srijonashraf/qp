import React from "react";
import { useNavigate } from "react-router-dom";

const SelectStory = ({ LeftSide, Preview }) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex w-full bg-body-base-color/15 items-center justify-center min-h-[90vh]">
      <div
        className="bg-body-base-color/30 p-2 absolute top-0 left-0 m-5 rounded-full cursor-pointer"
        onClick={() => navigate("/newsfeed")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
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
      {LeftSide && <LeftSide />}
      {Preview && <Preview />}
    </div>
  );
};

export default SelectStory;
