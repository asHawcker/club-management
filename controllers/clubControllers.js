import { conn } from "../config/db-setup.js";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";

dotenv.config();

const BAD_REQUEST = parseInt(process.env.BAD_REQUEST, 10);
const SERVER_ERROR = parseInt(process.env.SERVER_ERROR, 10);
const NOT_FOUND = parseInt(process.env.NOT_FOUND, 10);
const SERVER_OK = parseInt(process.env.SERVER_OK, 10);

export const getClubs = asyncHandler(async (req, res) => {
    const [rows] = await conn.query("SELECT * FROM CLUB");
    res.status(SERVER_OK)
    res.render('clubs', { clubs: rows });
});

export const addClub = asyncHandler(async (req, res) => {
    const { name, email, pass, pic, room, fa, fu, logo_url, type } = req.body;
    console.log("body : ", req.body);

    if (!name || !email || !pass || !pic || !room || !fa || !fu || !type) {
        res.status(BAD_REQUEST);
        throw new Error("All fields (name, email, pass, pic, room, fa, fu, logo_url, type) are required");
    }

    try {
        const [rows] = await conn.query(
            "INSERT INTO CLUB (name, email, pass_w, pic, room, funds_alloted, funds_utilised, logo_url, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [name, email, pass, pic, room, fa, fu, logo_url, type]
        );
        res.status(201).json({ message: "add" });
        console.log("rows : ", rows);
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error adding club");
    }
});

export const getClub = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await conn.query("SELECT * FROM CLUB WHERE PIC = ?", [id]);
        if (rows.length === 0) {
            res.status(NOT_FOUND);
            throw new Error("Club not found");
        }
        res.status(SERVER_OK)
        res.render('clubs', { clubs: rows });
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error retrieving club");
    }
});



export const removeClub = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await conn.query("DELETE FROM CLUB WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            res.status(NOT_FOUND);
            throw new Error("Club not found");
        }
        res.status(SERVER_OK).json({ message: `Club with id ${id} removed successfully` });
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error removing club");

    }
});


export const updateClub = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, email, pass, pic, room, fa, fu, logo_url, type } = req.body;

    if (!name || !email || !pass || !pic || !room || !fa || !fu || !type) {
        res.status(BAD_REQUEST);
        throw new Error("All fields (name, email, pass, pic, room, fa, fu, logo_url, type) are required");
    }

    try {
        const [result] = await conn.query(
            "UPDATE CLUB SET name = ?, email = ?, pass_w = ?, pic = ?, room = ?, funds_alloted = ?, funds_utilised = ?, logo_url = ?, type = ? WHERE id = ?",
            [name, email, pass, pic, room, fa, fu, logo_url, type, id]
        );
        if (result.affectedRows === 0) {
            res.status(NOT_FOUND);
            throw new Error("Club not found");
        }
        res.status(SERVER_OK).json({ message: `Club with id ${id} updated successfully` });
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error updating club");
    }
});
export const getClubAssets = asyncHandler(async (req, res) => {
    const clubId = req.params.id;
    const [assets] = await conn.query("SELECT name, value FROM ASSET WHERE club = ?", [clubId]);
    res.json(assets);
  });