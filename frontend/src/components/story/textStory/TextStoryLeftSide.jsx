import React, { useState } from "react";
import useStateStore from "../../../store/StateStore";

const TextStoryLeftSide = () => {
  const { setBackgroundColor, setTextContent, setPrivacy, setCreateStory } =
    useStateStore();

  const [backgroundColor, updateBackgroundColor] = useState("#334BC6");
  const [textValue, setTextValue] = useState("");
  const [privacy, setPrivacyState] = useState("Public");

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTextValue(text);
    setTextContent(text);
  };

  const handleBackgroundColorChange = (color) => {
    updateBackgroundColor(color);
    setBackgroundColor(color);
  };

  const handlePrivacyChange = (e) => {
    const privacyValue = e.target.value;
    setPrivacyState(privacyValue);
    setPrivacy(privacyValue);
  };

  return (
    <div className="p-3 bg-white shadow-lg min-h-screen flex flex-col gap-5">
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
        <p className="font-poppins font-normal text-sm">Background Color</p>
        <div className="border w-full h-[45px] flex space-x-2 p-2 justify-center">
          {["purple", "green", "red", "orange", "black", "blue", "tomato"].map(
            (color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full ${
                  backgroundColor === color ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleBackgroundColorChange(color)}
              />
            )
          )}
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
        className="bg-brand-primary text-white py-2 rounded-md font-semibold font-poppins text-[15px] mt-5"
        onClick={() => setCreateStory(true)}
      >
        Create Story
      </button>
    </div>
  );
};

export default TextStoryLeftSide;
