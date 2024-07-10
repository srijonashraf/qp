import React from "react";
import useStateStore from "../../../store/StateStore";
import { createStory } from "../../../api/apiRequest";
import { errorToast, successToast } from "../../../helper/toasterHelper";
import { useNavigate } from "react-router-dom";

const PreviewText = () => {
  const {
    backgroundColor,
    textContent,
    privacy,
    setCreateStory,
    createStoryFlag,
    setTextContent,
  } = useStateStore();

  const navigate = useNavigate();

  const handleCreateStory = async () => {
    const formValue = {
      userID: "6144f347b3f5d84c8c5f9d43",
      type: "text",
      text: textContent,
      background: backgroundColor,
      privacy: privacy,
    };

    const response = await createStory(formValue);
    if (response) {
      successToast("Story Created Successfully");
      setCreateStory(false);
      setTextContent("");
      navigate("/newsfeed");
    } else {
      errorToast("Something went wrong");
    }
  };

  React.useEffect(() => {
    if (createStoryFlag) {
      handleCreateStory();
    }
  }, [createStoryFlag]);

  return (
    <div className="mx-5 my-10 bg-white shadow-lg flex flex-col gap-5 rounded-md h-screen">
      <div className="p-5 flex flex-col gap-2 flex-grow">
        <p className="font-poppins font-semibold text-base">Preview</p>
        <div className="w-full flex-grow bg-body-base-color/20 flex items-center justify-center">
          <div
            style={{ backgroundColor }}
            className="h-[500px] flex items-center justify-center p-5 rounded-md"
          >
            <input
              value={textContent}
              className="font-poppins font-semibold text-base text-center text-white max-sm:text-sm w-full h-full bg-transparent border-none outline-none"
              readOnly
              placeholder="Start Typing"
            />
          </div>
        </div>
        <button
          onClick={handleCreateStory}
          className="bg-brand-primary hidden max-sm:block text-white py-2 rounded-md font-semibold font-poppins text-[15px] mt-5"
        >
          Create Story
        </button>
      </div>
    </div>
  );
};

export default PreviewText;
