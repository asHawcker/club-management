import express from "express";
import { getClubs, addClub, getClub, updateClub, removeClub } from "../controllers/clubControllers.js";
export const clubRouter = express.Router();

clubRouter.route("/").get(getClubs).post(addClub);

clubRouter.route("/:id").get(getClub).put(updateClub).delete(removeClub);

