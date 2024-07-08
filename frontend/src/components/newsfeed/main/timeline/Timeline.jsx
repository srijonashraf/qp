import React from "react";
import CreatePost from "./subComponents/CreatePost.jsx";
import CreateStory from "./subComponents/CreateStory.jsx";

const Timeline = () => {
    return (
        <div className="bg-white rounded mt-2 max-sm:mt-0">
            <CreatePost/>
            <CreateStory/>
        </div>
    );
};

export default Timeline;
