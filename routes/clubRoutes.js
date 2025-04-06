import express from "express";
import { getClubs, addClub, getClub, updateClub, removeClub } from "../controllers/clubControllers.js";
export const router = express.Router();

router.route("/").get(getClubs).post(addClub);

router.route("/:id").get(getClub).put(updateClub).delete(removeClub);

