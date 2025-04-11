import express from "express";
import { 
    getClubAssets, 
    addAsset, 
    getClubCompetitions, 
    getClubEvents, 
    getClubMembers, 
    getClubSponsors, 
    getClubFunds, 
    deleteClubAssets, 
    deleteClubCompetitions, 
    deleteClubEvents, 
    deleteClubMembers, 
    deleteClubSponsors, 
    deleteClubFunds,
    addCompetition,
    addEvent,
    addSponsor,
    addFund,
    addMember
} from "../controllers/assetControllers.js";

export const assetRouter = express.Router();

assetRouter.route("/add").post(addAsset);
assetRouter.route("/:id").get(getClubAssets).delete(deleteClubAssets);

assetRouter.route("/c/:id").get(getClubCompetitions).post(addCompetition).delete(deleteClubCompetitions);
assetRouter.route("/e/:id").get(getClubEvents).post(addEvent).delete(deleteClubEvents);
assetRouter.route("/s/:id").get(getClubSponsors).post(addSponsor).delete(deleteClubSponsors);
assetRouter.route("/f/:id").get(getClubFunds).post(addFund).delete(deleteClubFunds);
assetRouter.route("/m/:id").get(getClubMembers).post(addMember).delete(deleteClubMembers);