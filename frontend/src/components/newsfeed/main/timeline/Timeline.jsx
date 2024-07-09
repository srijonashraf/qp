import React from "react";
import CreatePostContainer from "./subComponents/CreatePostContainer.jsx";
import CreateStoryContainer from "./subComponents/CreateStoryContainer.jsx";
import AllPost from "./subComponents/AllPost.jsx";

const Timeline = () => {
  return (
    <div className="rounded mt-2 max-sm:mt-0">
      <CreatePostContainer />
      <CreateStoryContainer />
      <AllPost />
    </div>
  );
};

export default Timeline;
