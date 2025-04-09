import express from "express";
import { getClubAssets, addAsset } from "../controllers/assetControllers.js";
export const assetRouter = express.Router();

assetRouter.route("/add").post(addAsset);
assetRouter.route("/:id").get(getClubAssets);