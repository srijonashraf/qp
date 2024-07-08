import React from "react";
import userAvatar from "../../../../../assets/image/user.png";
import sea from "../../../../../assets/image/sea.jpg";
import ThreedotIcon from "../../../../../assets/icons/newsfeed/ThreedotIcon";
import CloseIcon from "../../../../../assets/icons/newsfeed/CloseIcon";
import CommentIcon from "../../../../../assets/icons/newsfeed/CommentIcon";
import ShareIcon from "../../../../../assets/icons/newsfeed/ShareIcon";
import LikeIcon from "../../../../../assets/icons/newsfeed/LikeIcon";
import WorldIcon from "../../../../../assets/icons/newsfeed/WorldIcon";
import CommentAction from "../../../../../assets/icons/newsfeed/CommentAction";
import ReplyIcon from "../../../../../assets/icons/newsfeed/ReplyIcon";
import EmojiIcon from "../../../../../assets/icons/newsfeed/EmojiIcon";
import CameraIcon from "../../../../../assets/icons/newsfeed/CameraIcon";
import GIFIcon from "../../../../../assets/icons/newsfeed/GIFIcon";
import StickerIcon from "../../../../../assets/icons/newsfeed/StickerIcon";
import HeartReactIcon from "../../../../../assets/icons/newsfeed/HeartReactIcon";
import LikeBlueIcon from "../../../../../assets/icons/newsfeed/LikeBlueIcon";
import HahaIcon from "../../../../../assets/icons/newsfeed/HahaIcon";

const AllPost = () => {
  const post = {
    name: "Memes Group",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    active: "1h",
    reactions: 258,
    reactionType: [
      { type: "like", count: 1 },
      { type: "love", count: 52 },
      { type: "haha", count: 200 },
      { type: "wow", count: 1 },
      { type: "sad", count: 1 },
      { type: "angry", count: 1 },
      { type: "dislike", count: 1 },
    ],
    comments: 39,
    shares: 30,
    image: sea,
  };

  const comment = {
    name: "Nafiul Islam",
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    hasReply: true,
    reply: "This is a reply comment",
    replyCount: 1,
    replyReactionCount: 10,
    replyReactionType: [
      { type: "like", count: 3 },
      { type: "love", count: 3 },
      { type: "haha", count: 1 },
      { type: "wow", count: 1 },
      { type: "sad", count: 1 },
      { type: "angry", count: 1 },
      { type: "dislike", count: 1 },
    ],
    commentTime: "1h",
    replyTime: "30m",
  };

  const getReactionEmoji = (reaction) => {
    switch (reaction.type) {
      case "like":
        return <LikeBlueIcon />;
      case "love":
        return <HeartReactIcon />;
      case "haha":
        return <HahaIcon />;
      case "wow":
        return "😲";
      case "sad":
        return "😢";
      case "angry":
        return "😠";
      case "dislike":
        return "👎";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white mt-2">
      {/* Title, Description */}
      <section>
        <div className="flex gap-1 p-3 items-center justify-between">
          <div className="flex gap-2">
            <img
              src={userAvatar}
              alt="User Image"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
            />
            <div className="flex flex-col">
              <p className="font-poppins font-medium text-[15px] cursor-pointer">
                {post.name}
              </p>
              <p className="font-poppins font-normal text-[13px] cursor-pointer flex items-center gap-1">
                {post.active} · <WorldIcon />
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <ThreedotIcon /> <CloseIcon />
          </div>
        </div>
        <div className="px-4 font-normal text-xs font-poppins leading-[18px] cursor-pointer">
          {post.description}
        </div>
      </section>
      {/* Image, Video */}
      <section>
        <img src={post.image} alt="" className="w-full my-2 cursor-pointer" />
      </section>
      {/* React Count, Comment Count, Share Count */}
      <section className="px-3 flex items-center justify-between">
        <div className="flex items-center font-poppins font-medium text-[14px] text-gray-500 cursor-pointer">
          {post.reactionType
            .sort((a, b) => b.count - a.count)
            .slice(0, 2)
            .map((reaction, index) => (
              <span key={index}>{getReactionEmoji(reaction)}</span>
            ))}
          {post.reactions}
        </div>
        <div className="flex gap-2 font-poppins font-medium text-base text-gray-500">
          <div className="flex items-center cursor-pointer">
            {post.comments} <CommentIcon />
          </div>
          <div className="flex items-center cursor-pointer">
            {post.shares} <ShareIcon />
          </div>
        </div>
      </section>
      {/* React Icon, Comment Icon, Share Icon */}
      <section className="p-4 flex justify-between">
        <p className="flex items-center gap-1 font-poppins font-medium text-base cursor-pointer">
          <LikeIcon /> Like
        </p>
        <p className="font-poppins font-medium text-base cursor-pointer">
          Comment
        </p>
        <p className="font-poppins font-medium text-base cursor-pointer">
          Share
        </p>
      </section>
      {/* Comments */}
      <hr />
      <section className="p-3">
        {/* Comments View */}
        <p className="font-poppins font-semibold text-base cursor-pointer">
          View more comments
        </p>
        <div className="flex gap-2 mt-2 items-start">
          <img
            src={userAvatar}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <div className="relative flex flex-col gap-2 rounded-2xl bg-body-base-color/20 p-3">
                <p className="font-poppins font-medium text-[14px] cursor-pointer">
                  {comment.name}
                </p>
                <p className="font-poppins font-normal text-xs leading-[18px] relative">
                  {comment.comment}
                </p>
                <div
                  className="absolute flex items-center -bottom-3 right-10 bg-white px-2 
                rounded-full shadow-md font-poppins font-normal text-sm text-gray-600"
                >
                  {comment.replyReactionType
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 2)
                    .map((reaction, index) => (
                      <span key={index}>{getReactionEmoji(reaction)}</span>
                    ))}
                  {comment.replyReactionCount}
                </div>
              </div>
              <div className="">
                <CommentAction className="w-[26px] h-[26px] cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 font-semibold text-xs px-3 mt-1">
                {comment.commentTime}
                <p className="cursor-pointer">Like</p>
                <p className="cursor-pointer">Reply</p>
              </div>
              <div>
                {comment.reply && comment.replyCount ? (
                  <div className="flex">
                    <ReplyIcon />
                    <p className="font-poppins font-medium text-xs mt-2 text-gray-400 cursor-pointer">
                      View <span>{comment.replyCount}</span> Reply
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Create Comment */}
        <div className="flex items-center gap-2 mt-3 relative">
          <img
            src={userAvatar}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="Write a public comment..."
            className="relative outline-none bg-body-base-color/15 p-2 w-full rounded-md
            placeholder:font-poppins placeholder:font-normal placeholder:text-[13px] pr-10"
          />
          <div className="absolute right-2 flex gap-2 items-center">
            <EmojiIcon className="cursor-pointer" />
            <CameraIcon className="cursor-pointer" />
            <GIFIcon className="cursor-pointer" />
            <StickerIcon className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllPost;
