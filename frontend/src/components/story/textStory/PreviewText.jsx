import React from "react";
import useStateStore from "../../../store/StateStore";

const PreviewText = () => {
  const { backgroundColor, textContent } = useStateStore();

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
      </div>
    </div>
  );
};

export default PreviewText;
