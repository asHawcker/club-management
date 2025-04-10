import express from "express";
import { getClubs, addClub, getClub, updateClub, removeClub, getClubDetails} from "../controllers/clubControllers.js";
export const clubRouter = express.Router();

clubRouter.route("/guest").get(getClubs);
clubRouter.route("/").post(addClub);

clubRouter.route("/kdp6U2HBnl:id/e7aYVh2").get(getClub).put(updateClub).delete(removeClub);

clubRouter.route("/kdp6U2HBnl:id/details/:cid").get(getClubDetails).put(updateClub).delete(removeClub);
  