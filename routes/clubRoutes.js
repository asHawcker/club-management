import express from "express";
import { getClubs, addClub, getClub, updateClub, removeClub, getClubAssets} from "../controllers/clubControllers.js";
export const clubRouter = express.Router();

clubRouter.route("/").get(getClubs).post(addClub);

clubRouter.route("/:id").get(getClub).put(updateClub).delete(removeClub);

clubRouter.route('/:id/assets').get(getClubAssets);
  