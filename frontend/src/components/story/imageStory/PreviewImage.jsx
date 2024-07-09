import React from "react";
import useStateStore from "../../../store/StateStore";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../../helper/toasterHelper";
import { createStory } from "../../../api/apiRequest";

const PreviewImage = () => {
  const {
    backgroundColor,
    textContent,
    privacy,
    selectedImage,
    imageScale,
    setCreateStory,
    createStoryFlag,
    setTextContent,
    setSelectedImage,
    setImageScale,
  } = useStateStore();

  const navigate = useNavigate();

  const handleCreateStory = async () => {
    const formValue = {
      userID: "6144f347b3f5d84c8c5f9d43",
      type: "photo",
      text: textContent,
      background: backgroundColor,
      privacy: privacy,
      image: selectedImage,
    };

    const response = await createStory(formValue);
    if (response) {
      successToast("Story Created Successfully");
      setCreateStory(false);
      setTextContent("");
      setSelectedImage(null);
      setImageScale(100); // Reset the image scale
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

  const handleSliderChange = (event) => {
    setImageScale(Number(event.target.value));
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-lg flex flex-col gap-5 rounded-md h-screen">
      <div className="p-5 flex flex-col gap-2 flex-grow">
        <p className="font-poppins font-semibold text-base">Preview</p>
        <div className="w-full flex-grow bg-body-base-color/20 flex items-center justify-center">
          <div
            style={{ backgroundColor }}
            className="h-[500px] flex items-center justify-center p-5 rounded-md relative"
          >
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Preview"
                className="max-h-full max-w-full rounded-md"
                style={{ transform: `scale(${imageScale / 100})` }}
              />
            )}
            {textContent && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="font-poppins font-semibold text-base text-dark text-center p-5">{textContent}</p>
              </div>
            )}
          </div>
        </div>
        {selectedImage && (
          <div className="mt-4 flex flex-col items-center">
            <input
              type="range"
              className="w-full h-5 bg-brand-primary rounded-full"
              value={imageScale}
              min={0}
              max={200}
              step={1}
              onChange={handleSliderChange}
            />
            <div className="text-center mt-2">Scale Image</div>
          </div>
        )}
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

export default PreviewImage;
