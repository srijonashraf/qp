import React from "react";
import CreatePost from "./subComponents/CreatePost.jsx";
import CreateStory from "./subComponents/CreateStory.jsx";
import AllPost from "./subComponents/AllPost.jsx";

const Timeline = () => {
  return (
    <div className="rounded mt-2 max-sm:mt-0">
      <CreatePost />
      <CreateStory />
      <AllPost />
    </div>
  );
};

export default Timeline;
