import { conn } from "../config/db-setup.js";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";

dotenv.config();

const BAD_REQUEST = parseInt(process.env.BAD_REQUEST, 10);
const SERVER_ERROR = parseInt(process.env.SERVER_ERROR, 10);
const NOT_FOUND = parseInt(process.env.NOT_FOUND, 10);
const SERVER_OK = parseInt(process.env.SERVER_OK, 10);

export const getClubAssets = asyncHandler(async (req, res) => {
    const clubId = req.params.id;
    const [assets] = await conn.query("SELECT name, value FROM ASSET WHERE club = ?", [clubId]);
    res.json(assets);
  });

export const addAsset = asyncHandler(async (req, res) => {
    const { name,description, value, club } = req.body;

    if (!name || !value || !club) {
        res.status(BAD_REQUEST);
        throw new Error("All fields (name, value, club) are required");
    }
    try {
        const [rows] = await conn.query(
            "INSERT INTO ASSET (name, description, value, club) VALUES (?, ?, ?, ?)",
            [name, description, value, club]
        );
        res.status(SERVER_OK).json({ message: "Asset added successfully" });
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error adding asset");
    }
});