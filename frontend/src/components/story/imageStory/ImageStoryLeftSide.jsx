import React, { useState } from "react";
import useStateStore from "../../../store/StateStore";
import PlusIcon from "../../../assets/icons/navbar/PlusIcon";
import { createStory } from "../../../api/apiRequest"; // Import your createStory API function
import { successToast, errorToast } from "../../../helper/toasterHelper"; // Import your toaster helper functions
import { useNavigate } from "react-router-dom";

const ImageStoryLeftSide = () => {
  const {
    setBackgroundColor,
    setTextContent,
    setTextColor,
    setPrivacy,
    setSelectedImage,
    setCreateStory,
    textColor,
    textContent,
    privacy,
  } = useStateStore();

  const [backgroundColor, updateBackgroundColor] = useState("#334BC6");
  const [textValue, setTextValue] = useState("");
  const [, setPrivacyState] = useState("Public");
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTextValue(text);
    setTextContent(text);
  };

  const handleBackgroundColorChange = (color) => {
    updateBackgroundColor(color);
    setBackgroundColor(color);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color);
  };

  const handlePrivacyChange = (e) => {
    const privacyValue = e.target.value;
    setPrivacyState(privacyValue);
    setPrivacy(privacyValue);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setSelectedImage(URL.createObjectURL(e.target.files[0])); // For preview purposes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateStory();
  };

  const handleCreateStory = async () => {
    const formData = new FormData();
    formData.append("userID", "6144f347b3f5d84c8c5f9d43");
    formData.append("type", "photo");
    formData.append("text", textContent);
    formData.append("background", backgroundColor);
    formData.append("privacy", privacy);
    if (imageFile) {
      formData.append("image", imageFile); // Add image file to FormData
    }

    try {
      const response = await createStory(formData); // Ensure this function handles FormData
      if (response) {
        successToast("Story Created Successfully");
        setCreateStory(false);
        setTextContent("");
        setSelectedImage(null);
        setImageFile(null); // Reset the image file state
        navigate("/newsfeed");
      } else {
        errorToast("Something went wrong");
      }
    } catch (error) {
      errorToast("An error occurred while creating the story");
    }
  };

  return (
    <div className="p-3 bg-white shadow-lg min-h-screen flex flex-col gap-5">
      <form
        className="flex flex-col gap-5"
        encType="multipart/form-data"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <p className="font-poppins font-semibold text-2xl leading-9">
            Create Your Story
          </p>
          <div className="relative mb-6">
            <textarea
              className="font-normal font-poppins text-xs border h-[206px] outline-none resize-none p-2 w-full"
              placeholder="Start Typing"
              value={textValue}
              onChange={handleTextChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-poppins font-normal text-sm">Text Color</p>
          <div className="border w-full h-[45px] flex space-x-2 p-2 justify-center">
            {[
              "purple",
              "green",
              "red",
              "orange",
              "black",
              "blue",
              "tomato",
            ].map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full ${
                  color === textColor ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleTextColorChange(color)}
                type="button"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-poppins font-normal text-sm">Background Color</p>
          <div className="border w-full h-[45px] flex space-x-2 p-2 justify-center">
            {[
              "purple",
              "green",
              "red",
              "orange",
              "black",
              "blue",
              "tomato",
            ].map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full ${
                  backgroundColor === color ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleBackgroundColorChange(color)}
                type="button"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-poppins font-normal text-sm">Image</p>
          <div className="relative border w-full h-[45px] flex items-center justify-center bg-gray-100">
            <input
              type="file"
              name="image"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
            <PlusIcon />
          </div>
        </div>
        <div>
          <select
            name="privacy"
            id="privacy-select"
            className="w-full border outline-none p-2 font-inter font-normal text-base"
            value={privacy}
            onChange={handlePrivacyChange}
          >
            <option value="Public">Public</option>
            <option value="Friends">Friends</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-brand-primary text-white py-2 rounded-md font-semibold font-poppins text-[15px] mt-5"
        >
          Create Story
        </button>
      </form>
    </div>
  );
};

export default ImageStoryLeftSide;
