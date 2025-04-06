import express from "express";
import { getAuthPage, attemptAuth } from "../controllers/authControllers.js";
export const authRouter = express.Router();

authRouter.route("/").get(getAuthPage).post(attemptAuth);

// authRouter.route("/:id").get(getClub).put(updateClub).delete(removeClub);

