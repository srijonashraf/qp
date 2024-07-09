import React from "react";

const CreateStory = ({ LeftSide, Preview }) => {
  return (
    <div className="bg-body-base-color/20 min-h-screen grid grid-cols-12 gap-5">
      <div className="col-span-2 max-sm:hidden md:col-span-3">{LeftSide && <LeftSide />}</div>
      <div className="col-span-10 md:col-span-9">{Preview && <Preview />}</div>
    </div>
  );
};

export default CreateStory;
