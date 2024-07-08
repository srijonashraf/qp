import React from "react";
import avatar from "../../../../../assets/image/user.png";
import LiveIcon from "../../../../../assets/icons/newsfeed/LiveIcon";
import PhotoIcon from "../../../../../assets/icons/newsfeed/PhotoIcon";
import FeelingIcon from "../../../../../assets/icons/newsfeed/FeelingIcon";
import ImageOnlyIcon from "../../../../../assets/icons/newsfeed/ImageOnlyIcon.jsx";

const CreatePost = () => {
  const activity = [
    {
      icon: <LiveIcon />,
      name: "Live Video",
    },
    {
      icon: <PhotoIcon />,
      name: "Photo/Video",
    },
    {
      icon: <FeelingIcon />,
      name: "Feeling/Activity",
    },
  ];
  return (
    <div className="flex flex-col bg-white">
      {/* Create Post Section */}
      <div className="flex gap-4 p-6 max-sm:p-3 items-center">
        <img
          src={avatar}
          alt="User Avatar"
          className="rounded-full w-14 h-14 object-contain bg-gray-800 
          max-sm:rounded-md max-sm:w-12 max-sm:h-12"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="What's on your mind, Shanto?"
          className="w-full placeholder:font-poppins placeholder:font-normal
                    placeholder:text-sm bg-body-base-color/15 py-3 
                    rounded-full max-sm:rounded-md outline-none p-5"
        />
        <ImageOnlyIcon className="w-16 h-16 sm:hidden" />
      </div>
      <hr className="max-sm:hidden" />
      {/* Live, Upload and Feeling Section */}
      <div className="flex my-3 max-sm:hidden">
        <ul className="flex w-full justify-around items-center">
          {activity.map((item, key) => (
            <li
              key={key}
              className="flex gap-1 items-center font-poppins
              font-semibold text-sm text-body-base-color cursor-pointer"
            >
              {item.icon} {item.name}
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default CreatePost;
