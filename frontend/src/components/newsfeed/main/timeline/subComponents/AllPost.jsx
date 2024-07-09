import React, { useEffect, useRef, useState } from "react";
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
import HeartIcon from "../../../../../assets/icons/newsfeed/HeartIcon";
import AngryIcon from "../../../../../assets/icons/newsfeed/AngryIcon";
import WowIcon from "../../../../../assets/icons/newsfeed/WowIcon";
import LikeBlueIcon from "../../../../../assets/icons/newsfeed/LikeBlueIcon";
import HahaIcon from "../../../../../assets/icons/newsfeed/HahaIcon";
import SadIcon from "../../../../../assets/icons/newsfeed/SadIcon";
import ReactionContainer from "./ReactionContainer";
import usePostStore from "../../../../../store/PostStore";
import { formatDistanceToNow } from "date-fns";
import useProfileStore from "../../../../../store/ProfileStore";
import { commentSubmission } from "../../../../../api/apiRequest";

const AllPost = () => {
  const [hoveredReaction, setHoveredReaction] = useState(null);
  const [hoveredReactionReply, setHoveredReactionReply] = useState(null);
  const [focusedComment, setFocusedComment] = useState(null);
  const [showMoreReplies, setShowMoreReplies] = useState(false); // State to toggle showing all replies
  const [commentValue, setCommentValue] = useState({
    user_id: "",
    post_id: "",
    comment_name: "",
    image_or_video: "",
  });
  const { Posts, FetchPostsRequest } = usePostStore();
  const { ProfilePic } = useProfileStore();
  const commentRefs = useRef([]);
  const commentInput = useRef(null);

  useEffect(() => {
    if (focusedComment !== null) {
      commentInput.current.focus();
      setFocusedComment(null);
    }
  }, [focusedComment]);

  const getReactionEmoji = (reaction) => {
    switch (reaction) {
      case "like":
        return <LikeBlueIcon width="20" height="20" />;
      case "love":
        return <HeartIcon width="20" height="20" />;
      case "haha":
        return <HahaIcon width="20" height="20" />;
      case "wow":
        return <WowIcon width="20" height="20" />;
      case "sad":
        return <SadIcon width="20" height="20" />;
      case "angry":
        return <AngryIcon width="20" height="20" />;
      default:
        return "";
    }
  };

  const handleCommentSubmission = async (userId, postId, comment, e) => {
    e.preventDefault(); // Prevent form submission
    const formValue = {
      user_id: userId,
      post_id: postId,
      comment_name: comment,
    };

    // Disable input during submission
    commentInput.current.disabled = true;

    const response = await commentSubmission(formValue);
    if (response) {
      await FetchPostsRequest();
      setCommentValue({ ...commentValue, comment_name: "" }); // Clear input field
    } else {
      console.log("Something Went Wrong");
    }

    // Re-enable input after submission
    commentInput.current.disabled = false;
  };

  return (
    <div className="flex flex-col gap-2">
      {Posts?.map((post, postIndex) => (
        <div key={postIndex} className="bg-white mt-2">
          {/* Title, Description */}
          <section>
            <div className="flex gap-1 p-3 items-center justify-between">
              <div className="flex gap-2">
                <img
                  src={`https://quantumpossibilities.eu:82/uploads/${post?.user_id?.profile_pic}`}
                  alt="User Image"
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="font-poppins font-medium text-[15px] cursor-pointer">
                      {post?.user_id?.first_name} {post?.user_id?.last_name}
                    </p>
                    {post?.tagged_user_list?.length > 0 && (
                      <ul>
                        {post.tagged_user_list.map((taggedUser, key) => (
                          <li key={key} className="flex gap-1">
                            {taggedUser}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className="font-poppins font-normal text-[13px] cursor-pointer flex items-center gap-1">
                    {formatDistanceToNow(new Date(post.createdAt), {
                      addSuffix: true,
                    })}{" "}
                    · <WorldIcon />
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
          <section className="w-full">
            {post?.media[0]?.media && (
              <img
                src={`https://quantumpossibilities.eu:82/uploads/posts/${post?.media[0]?.media}`}
                alt=""
                className="w-full h-[395px] object-contain my-2 cursor-pointer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://res.cloudinary.com/srijonashraf/image/upload/v1720527633/no-image_am2zyv.jpg";
                }}
              />
            )}
          </section>

          {/* React Count, Comment Count, Share Count */}
          <section className="px-3 flex items-center justify-between">
            <div className="flex items-center font-poppins font-medium text-[14px] text-gray-500 cursor-pointer">
              {post?.reactionTypeCountsByPost?.length > 0 &&
                post.reactionTypeCountsByPost
                  .sort((a, b) => b.count - a.count)
                  .slice(0, 2)
                  .map((reaction, index) => (
                    <span key={index}>
                      {getReactionEmoji(reaction.reaction_type)}
                    </span>
                  ))}
              {post.reactionCount || null}
            </div>
            <div className="flex gap-2 font-poppins font-medium text-base text-gray-500">
              <div className="flex items-center cursor-pointer">
                {post.totalComments} <CommentIcon />
              </div>
              <div className="flex items-center cursor-pointer">
                {post.postShareCount} <ShareIcon />
              </div>
            </div>
          </section>

          {/* React Icon, Comment Icon, Share Icon */}
          <section className="p-4 flex justify-between relative">
            <div
              className="flex items-center gap-1 font-poppins font-medium text-base cursor-pointer"
              onMouseEnter={() => setHoveredReaction(postIndex)}
              onMouseLeave={() => setHoveredReaction(null)}
            >
              {hoveredReaction === postIndex && (
                <div className="absolute bottom-6 left-2">
                  <ReactionContainer
                    open={true}
                    userId={post?.user_id}
                    postId={post?._id}
                  />
                </div>
              )}
              <LikeIcon /> Like
            </div>
            <p
              className="font-poppins font-medium text-base cursor-pointer"
              onClick={() => setFocusedComment(postIndex)}
            >
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
            {post?.comments?.map((comment, commentIndex) => (
              <div key={commentIndex}>
                <div className="flex gap-2 mt-2 items-start">
                  <img
                    src={`https://quantumpossibilities.eu:82/uploads/posts/${comment.user_id?.profile_pic}`}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="relative flex flex-col gap-2 rounded-2xl bg-body-base-color/20 p-3">
                        <p className="font-poppins font-medium text-[14px] cursor-pointer">
                          {comment?.user_id?.first_name}{" "}
                          {comment?.user_id?.last_name}
                        </p>
                        <p className="font-poppins font-normal text-xs leading-[18px] relative">
                          {comment.comment_name}
                        </p>
                        <div className="absolute flex items-center -bottom-3 right-10 bg-white px-2 rounded-full shadow-md font-poppins font-normal text-sm text-gray-600">
                          {comment?.comment_reactions?.map(
                            (reaction, index) => (
                              <span key={index}>
                                {getReactionEmoji(reaction.reaction_type)}
                              </span>
                            )
                          )}
                          {comment.comment_reactions.length || null}
                        </div>
                      </div>
                      <div>
                        <CommentAction className="w-[26px] h-[26px] cursor-pointer" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="relative flex gap-2 items-center mt-4 text-gray-400 font-poppins font-medium text-sm">
                        <p
                          className="cursor-pointer"
                          onMouseEnter={() =>
                            setHoveredReaction(`${postIndex}-${commentIndex}`)
                          }
                          onMouseLeave={() => setHoveredReaction(null)}
                        >
                          Like
                        </p>
                        {hoveredReaction === `${postIndex}-${commentIndex}` && (
                          <div className="absolute bottom-0 left-5 w-[220px]">
                            <ReactionContainer
                              open={true}
                              userId={post?.user_id}
                              postId={post?._id}
                            />
                          </div>
                        )}
                        <p
                          className="cursor-pointer"
                          onClick={() => setFocusedComment(postIndex)}
                        >
                          Reply
                        </p>
                      </div>

                      {/* Toggle for viewing more replies */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="relative">
                          {showMoreReplies ? (
                            comment.replies.map((reply, replyIndex) => (
                              <div
                                key={reply._id}
                                className="flex flex-col items-center space-x-2 mt-2"
                              >
                                <div className="flex items-top gap-2">
                                  <img
                                    src={`https://quantumpossibilities.eu:82/uploads/${reply.replies_user_id.profile_pic}`}
                                    alt="User"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <div className="bg-gray-100 p-2 rounded-lg flex-1">
                                    <p className="font-semibold">{`${reply.replies_user_id.first_name} ${reply.replies_user_id.last_name}`}</p>
                                    <p className="text-sm">
                                      {reply.replies_comment_name}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-2 items-center mt-2 text-gray-400 font-poppins font-medium text-sm">
                                  <div
                                    className="cursor-pointer px-2"
                                    onMouseEnter={() =>
                                      setHoveredReactionReply(
                                        `${postIndex}-${replyIndex}`
                                      )
                                    }
                                    onMouseLeave={() =>
                                      setHoveredReactionReply(null)
                                    }
                                  >
                                    Like
                                  </div>
                                  {hoveredReactionReply ===
                                    `${postIndex}-${replyIndex}` && (
                                    <div className="absolute top-10 left-5 w-[220px]">
                                      <ReactionContainer
                                        open={true}
                                        userId={post?.user_id}
                                        postId={post?._id}
                                      />
                                    </div>
                                  )}
                                  <p
                                    className="cursor-pointer"
                                    onClick={() => setFocusedComment(postIndex)}
                                  >
                                    Reply
                                  </p>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="flex">
                              <ReplyIcon />
                              <p
                                className="font-poppins font-medium text-xs mt-2 text-gray-400 cursor-pointer"
                                onClick={() => setShowMoreReplies(true)}
                              >
                                View <span>{comment.replies.length}</span>{" "}
                                Replies
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add a Comment */}
            <section className="flex gap-2 mt-3">
              <img
                src={ProfilePic}
                alt=""
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <div className="w-full">
                <form
                  className="relative rounded-full flex items-center bg-body-base-color/20 px-3 py-2 gap-3 w-full"
                  onSubmit={(e) =>
                    handleCommentSubmission(
                      post.user_id,
                      post._id,
                      commentValue.comment_name,
                      e
                    )
                  }
                >
                  <input
                    ref={commentInput}
                    type="text"
                    placeholder="Write a comment..."
                    className="font-poppins text-sm bg-transparent outline-none border-none w-full"
                    value={commentValue.comment_name}
                    onChange={(e) =>
                      setCommentValue({
                        ...commentValue,
                        comment_name: e.target.value,
                      })
                    }
                  />
                  <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <EmojiIcon />
                    <CameraIcon />
                    <GIFIcon />
                    <StickerIcon />
                  </div>
                </form>
              </div>
            </section>
          </section>
        </div>
      ))}
    </div>
  );
};

export default AllPost;
