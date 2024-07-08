import React from "react";
import LeftSidebar from "../components/newsfeed/leftSidebar/LeftSidebar.jsx";
import Suggestion from "../components/newsfeed/main/suggestions/Suggestion";
import Timeline from "../components/newsfeed/main/timeline/Timeline.jsx";
import RightSidebar from "../components/newsfeed/rightSidebar/RightSidebar.jsx";

const NewsFeed = () => {
  return (
    <div className="bg-body-base-color/20 grid grid-cols-12 gap-2 min-h-screen">
      <div className="hidden md:block md:col-span-3 lg:col-span-2 sticky top-0 h-screen">
        <LeftSidebar />
      </div>
      <div className="hidden lg:block lg:col-span-2">
        <Suggestion />
      </div>
      <div className="lg:col-span-6 md:col-span-9 col-span-12">
        <Timeline />
      </div>
      <div className="hidden lg:block lg:col-span-2">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsFeed;
