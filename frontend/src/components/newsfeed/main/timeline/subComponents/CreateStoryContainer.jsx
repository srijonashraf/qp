import React from "react";
import story1 from "../../../../../assets/image/user4.png";
import story2 from "../../../../../assets/image/user3.png";
import story3 from "../../../../../assets/image/user2.png";
import userStory from "../../../../../assets/image/user.png";
import StoryPlusIcon from "../../../../../assets/icons/newsfeed/StoryPlusIcon";
import RightArrowIcon from "../../../../../assets/icons/newsfeed/RightArrowIcon";
import { useNavigate } from "react-router-dom";

const CreateStoryContainer = () => {
  const story = [
    {
      name: "Vish Patil",
      thumbnail: story1,
    },
    {
      name: "Rakesh Shetty",
      thumbnail: story2,
    },
    {
      name: "Akash Bolre",
      thumbnail: story3,
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="bg-white p-3 pb-8">
      <ul className="flex gap-1 justify-around items-center relative">
        {/*Create Story*/}
        <div className="flex flex-col relative">
          <img
            src={userStory}
            className="rounded-xl w-[150px] h-[216px] max-sm:w-[81px] max-sm:h-[125px]"
          />
          <div
            className="absolute inset-0 flex justify-center items-end -bottom-3"
            onClick={() => navigate("/create-story")}
          >
            <StoryPlusIcon className="w-10 h-10 text-brand-primary max-sm:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {story.map((item, index) => (
          <li key={index} className="flex relative justify-between">
            {/*Other's Story*/}
            <div
              onClick={() => navigate("/view-story")}
              className="cursor-pointer"
            >
              <img
                src={item.thumbnail}
                alt="User Story"
                className="w-[150px] h-[216px] max-sm:w-[81px] max-sm:h-[125px] rounded-xl cursor-pointer"
              />
            </div>
            {/* User Profile Picture */}
            <div className="absolute inset-0 flex justify-center items-end -bottom-3">
              <img
                onClick={() => navigate("/view-story")}
                src={item.thumbnail}
                alt="User Profile Picture"
                className="w-10 h-10 rounded-full object-cover border-2 border-brand-primary cursor-pointer"
              />
            </div>
          </li>
        ))}
        <RightArrowIcon className="text-gray-800 z-50 absolute right-[2%] max-sm:hidden  cursor-pointer" />
      </ul>
    </div>
  );
};

export default CreateStoryContainer;
