import React from "react";
import Story from "./subComponent/Story";
import StoryViewers from "./subComponent/StoryViewers";

const ViewStory = () => {
  return (
    <div className="bg-body-base-color/20 grid grid-cols-12 min-h-screen">
      <div className="col-span-4 md:block hidden">
        <StoryViewers />
      </div>
      <div className="col-span-8 max-sm:col-span-12">
        <Story />
      </div>
    </div>
  );
};

export default ViewStory;
