import {
  addViewToStoryService,
  createStoryService,
  getAllStoryViewsService,
} from "../services/service.js";

export const createStory = async (req, res) => {
  const result = await createStoryService(req);
  res.status(200).json(result);
};

export const getAllStoryViews = async (req, res) => {
  const result = await getAllStoryViewsService(req);
  res.status(200).json(result);
};

export const addViewToStory = async (req, res) => {
  const result = await addViewToStoryService(req);
  res.status(200).json(result);
};
