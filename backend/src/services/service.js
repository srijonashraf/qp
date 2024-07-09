import { uploadOnCloudinary } from "./../utils/cloudinary.js";
import storyModel from "./../models/model.js";

export const createStoryService = async (req) => {
  try {
    const { userID, type, text, background, textColor, privacy } = req.body;

    // console.log(req.file.path);

    // Check if there's an image file to upload
    let imageResponse = null;
    if (req.file) {
      const imageUploadResult = await uploadOnCloudinary(req.file.path);
      if (imageUploadResult) {
        imageResponse = {
          public_id: imageUploadResult.public_id,
          url: imageUploadResult.secure_url,
        };
      } else {
        return { status: "fail", message: "Failed to upload image" };
      }
    }

    // Create story object to save in the database
    const newStory = new storyModel({
      userID,
      type,
      image: imageResponse ? imageResponse.url : null,
      text,
      background,
      textColor,
      privacy,
    });

    // Save the story to the database
    await newStory.save();

    return { status: "success", data: newStory };
  } catch (error) {
    console.error("Error creating story:", error);
    return { status: "fail", message: "Something went wrong" };
  }
};

export const getAllStoryViewsService = async (req) => {
  try {
    const storyId = req.query.storyID;
    const story = await storyModel.findById(storyId);
    if (!story) {
      return { status: "fail", message: "Story not found" };
    }

    const viewsCount = story.views.length;
    const views = story.views.map((view) => view.userID);

    return { status: "success", data: { viewsCount, views } };
  } catch (error) {
    console.error("Error fetching story views:", error);
    return { status: "fail", message: "Failed to fetch story views" };
  }
};

export const addViewToStoryService = async (req) => {
  try {
    const { storyID, userID } = req.query;

    const story = await storyModel.findById(storyID);

    if (!story) {
      return { status: "fail", message: "Story not found" };
    }

    // Check if the user has already viewed this story
    const existingView = storyModel
      .find({
        "views._id": { $in: [userID] },
      })
      .exec();

    if (existingView) {
      return {
        status: "success",
        message: "User has already viewed this story",
      };
    }

    // Add the new view to the story
    story.views.push({ userID });
    await story.save();

    return { status: "success", message: "View added successfully" };
  } catch (error) {
    console.error("Error adding view to story:", error);
    return { status: "fail", message: "Failed to add view to story" };
  }
};
