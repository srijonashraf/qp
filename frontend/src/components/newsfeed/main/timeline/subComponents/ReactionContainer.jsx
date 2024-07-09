import React from "react";
import angryGIF from "../../../../../assets/gifs/angry.gif";
import hahaGIF from "../../../../../assets/gifs/haha.gif";
import likeGIF from "../../../../../assets/gifs/like.gif";
import loveGIF from "../../../../../assets/gifs/love.gif";
import sadGIF from "../../../../../assets/gifs/sad.gif";
import wowGIF from "../../../../../assets/gifs/wow.gif";
import { reactionSubmission } from "../../../../../api/apiRequest";
import usePostStore from "../../../../../store/PostStore";

const ReactionContainer = ({ open, userId, postId }) => {
  const { FetchPostsRequest } = usePostStore();
  const handleReactionSubmission = async (reactionName) => {
    const formValue = {
      post_id: postId,
      reaction_type: reactionName,
      user_id: userId,
    };

    const response = await reactionSubmission(formValue);
    if (response) {
      await FetchPostsRequest();
    } else {
      console.log("Failed to Save Reaction");
    }
  };

  return open ? (
    <div className="bg-white border rounded-full w-full flex gap-1 p-2">
      <img
        src={likeGIF}
        width={30}
        height={30}
        alt="like"
        name="like"
        className="transform transition-transform duration-200 hover:scale-125 cursor-pointer"
        onClick={() => handleReactionSubmission("like")}
      />
      <img
        src={loveGIF}
        width={30}
        height={30}
        alt="love"
        name="love"
        className="transform transition-transform duration-200 hover:scale-125 cursor-pointer"
        onClick={() => handleReactionSubmission("love")}
      />
      <img
        src={hahaGIF}
        width={30}
        height={30}
        alt="haha"
        name="haha"
        className="transform transition-transform duration-200 hover:scale-125 cursor-pointer"
        onClick={() => handleReactionSubmission("haha")}
      />
      <img
        src={wowGIF}
        width={30}
        height={30}
        alt="wow"
        name="wow"
        className="transform transition-transform duration-200 hover:scale-125 cursor-pointer"
        onClick={() => handleReactionSubmission("wow")}
      />
      <img
        src={sadGIF}
        width={30}
        height={30}
        alt="sad"
        name="sad"
        className="transform transition-transform duration-200 hover:scale-125 cursor-pointer"
        onClick={() => handleReactionSubmission("sad")}
      />
      <img
        src={angryGIF}
        width={30}
        height={30}
        alt="angry"
        name="angry"
        className="transform transition-transform duration-200 hover:scale-125 cursor-pointer"
        onClick={() => handleReactionSubmission("angry")}
      />
    </div>
  ) : null;
};

export default ReactionContainer;
