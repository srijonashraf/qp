import express from "express";
import {
  createStory,
  getAllStoryViews,
  addViewToStory,
} from "./../controllers/controller.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.post("/create-story", upload.single("image"), createStory);

router.get("/story-views", getAllStoryViews);

router.post("/add-view", addViewToStory);

export default router;
