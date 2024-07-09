import React from "react";
import angryGIF from "../../../../../assets/gifs/angry.gif";
import hahaGIF from "../../../../../assets/gifs/haha.gif";
import likeGIF from "../../../../../assets/gifs/like.gif";
import loveGIF from "../../../../../assets/gifs/love.gif";
import sadGIF from "../../../../../assets/gifs/sad.gif";
import wowGIF from "../../../../../assets/gifs/wow.gif";

const ReactionContainer = ({ open }) => {
  return open ? (
    <div className="bg-white border rounded-full w-full flex gap-1 p-2">
      <img
        src={likeGIF}
        width={30}
        height={30}
        alt="like"
        name="like"
        className="transform transition-transform duration-200 hover:scale-125"
      />
      <img
        src={loveGIF}
        width={30}
        height={30}
        alt="love"
        name="love"
        className="transform transition-transform duration-200 hover:scale-125"
      />
      <img
        src={hahaGIF}
        width={30}
        height={30}
        alt="haha"
        name="haha"
        className="transform transition-transform duration-200 hover:scale-125"
      />
      <img
        src={wowGIF}
        width={30}
        height={30}
        alt="wow"
        name="wow"
        className="transform transition-transform duration-200 hover:scale-125"
      />
      <img
        src={sadGIF}
        width={30}
        height={30}
        alt="sad"
        name="sad"
        className="transform transition-transform duration-200 hover:scale-125"
      />
      <img
        src={angryGIF}
        width={30}
        height={30}
        alt="angry"
        name="angry"
        className="transform transition-transform duration-200 hover:scale-125"
      />
    </div>
  ) : null;
};

export default ReactionContainer;
