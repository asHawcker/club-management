import { conn } from "../config/db-setup.js";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";

dotenv.config();

const BAD_REQUEST = parseInt(process.env.BAD_REQUEST, 10);
const SERVER_ERROR = parseInt(process.env.SERVER_ERROR, 10);
const NOT_FOUND = parseInt(process.env.NOT_FOUND, 10);
const SERVER_OK = parseInt(process.env.SERVER_OK, 10);

export const getClubs = asyncHandler(async (req, res) => {
    const [rows] = await conn.query("SELECT id,name, type FROM CLUB");
    res.status(SERVER_OK)
    res.render('allclubs', { clubs: rows });
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
        const [rows] = await conn.query("SELECT * FROM CLUB");
        if (rows.length === 0) {
            res.status(NOT_FOUND);
            throw new Error("Club not found");
        }
        const [rows2] = await conn.query("SELECT * FROM CLUB where pic = ?", [id]);
        const [rows3] = await conn.query("SELECT email, name FROM PIC where id = ?", [id]);
        res.status(SERVER_OK)
        res.render('pic', { clubs: rows, myclubs : rows2, pic: rows3 });
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

export const getClubDetails = asyncHandler(async (req, res) => {
    const { id, cid } = req.params;
  
    try {
      const [club] = await conn.query("SELECT * FROM CLUB WHERE id = ?", [cid]);
      if (club.length === 0) {
        return res.status(404).render("error", { message: "Club not found" });
      }
      const [lead] = await conn.query("SELECT M.name FROM CLUB C INNER JOIN MEMBER M ON C.id = M.club WHERE C.id = ? AND M.position = 'lead'", [cid]);
      if (lead.length === 0) {
        return res.status(404).render("error", { message: "Lead not found" });
      }
  
      res.render("viewclub", {club: club[0], lead: lead[0]});
  
    } catch (err) {
      console.error(err);
      res.status(500).render("error", { message: "Error retrieving club details" });
    }
  });

  export const getClubDetailsGuest = asyncHandler(async (req, res) => {
    const {cid } = req.params;
  
    try {
      const [club] = await conn.query("SELECT * FROM CLUB WHERE id = ?", [cid]);
      if (club.length === 0) {
        return res.status(404).render("error", { message: "Club not found" });
      }
      const [lead] = await conn.query("SELECT M.name FROM CLUB C INNER JOIN MEMBER M ON C.id = M.club WHERE C.id = ? AND M.position = 'lead'", [cid]);
      if (lead.length === 0) {
        return res.status(404).render("error", { message: "Lead not found" });
      }
  
      res.render("viewclub", {club: club[0], lead: lead[0]});
  
    } catch (err) {
      console.error(err);
      res.status(500).render("error", { message: "Error retrieving club details" });
    }
  });