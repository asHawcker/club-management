import express from "express";
import { getClubAssets, addAsset, getClubCompetitions, getClubEvents, getClubMembers, getClubSponsors, getClubFunds } from "../controllers/assetControllers.js";
export const assetRouter = express.Router();

assetRouter.route("/add").post(addAsset);
assetRouter.route("/:id").get(getClubAssets);
assetRouter.route("/c/:id").get(getClubCompetitions);
assetRouter.route("/e/:id").get(getClubEvents);
assetRouter.route("/s/:id").get(getClubSponsors);
assetRouter.route("/f/:id").get(getClubFunds);
assetRouter.route("/m/:id").get(getClubMembers);