import React from "react";
import LeftMenu from "../components/newsfeed/leftSidebar/LeftMenu";
import Suggestion from "./../components/newsfeed/main/suggestions/Suggestion";
import Posts from "./../components/newsfeed/main/posts/Posts";
import RightMenu from "../components/newsfeed/rightSidebar/RightMenu";

const NewsFeed = () => {
  return (
    <div className="bg-body-base-color/20 h-screen grid grid-cols-12 pt-2 gap-2">
      {/* Left Menu: Visible from md breakpoint */}
      <div className="hidden md:block md:col-span-3 lg:col-span-2 sm:col-0 bg-white rounded hover:overflow-y-auto">
        <LeftMenu />
      </div>
      {/* Main Content: Adjusting columns based on screen size */}
      <div className="grid grid-cols-12 gap-2 md:col-span-9 lg:col-span-10 col-span-12">
        {/* Suggestions: Visible from lg breakpoint */}
        <div className="hidden lg:block lg:col-span-3 bg-white rounded">
          <Suggestion />
        </div>
        {/* Posts: Full width on small screens */}
        <div className="col-span-12 lg:col-span-6 md:col-span-12 bg-white rounded">
          <Posts />
        </div>
        {/* Right Menu: Visible from lg breakpoint */}
        <div className="hidden lg:block lg:col-span-3 bg-white rounded">
          <RightMenu />
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
