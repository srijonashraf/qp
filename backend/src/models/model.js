import mongoose from "mongoose";

const storySchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    type: {
      type: String,
      enum: ["photo", "text"],
      required: true,
    },
    image: {
      type: String,
    },
    text: {
      type: String,
    },
    background: {
      type: String,
    },
    textColor: {
      type: String,
    },
    privacy: {
      type: String,
      enum: ["Public", "Friends"],
    },
    views: [
      {
        userID: {
          type: mongoose.Schema.Types.ObjectId,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const storyModel = mongoose.model("stories", storySchema);

export default storyModel;
