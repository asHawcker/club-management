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
        const [pic] = await conn.query("SELECT c.pic, c.id FROM CLUB c WHERE c.id = ?", [club]);
        res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error adding asset");
    }
});

export const addCompetition = asyncHandler(async (req, res) => {
    const { name, description, prize_pool, winners, club } = req.body;

    if (!name || !prize_pool || !winners || !club) {
        res.status(BAD_REQUEST);
        throw new Error("All fields (name, prize_pool, winners, club) are required");
    }
    try {
        const [rows] = await conn.query(
            "INSERT INTO COMPETITIONS (name, description, prize_pool, winners, club) VALUES (?, ?, ?, ?, ?)",
            [name, description, prize_pool, winners, club]
        );
        const [pic] = await conn.query("SELECT c.pic, c.id FROM CLUB c WHERE c.id = ?", [club]);
        res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error adding competition");
    }
});

export const addEvent = asyncHandler(async (req, res) => {
    const { name, funds_Alloted, club } = req.body;

    if (!name || !funds_Alloted || !club) {
        res.status(BAD_REQUEST);
        throw new Error("All fields (name, funds_Alloted, club) are required");
    }
    try {
        const [rows] = await conn.query(
            "INSERT INTO EVENT (name, funds_Alloted, club) VALUES (?, ?, ?)",
            [name, funds_Alloted, club]
        );
        const [pic] = await conn.query("SELECT c.pic, c.id FROM CLUB c WHERE c.id = ?", [club]);
        res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error adding event");
    }
});

export const addMember = asyncHandler(async (req, res) => {
    const { name, role, email, club } = req.body;

    if (!name || !role || !email || !club) {
        res.status(BAD_REQUEST);
        throw new Error("All fields (name, role, email, club) are required");
    }
    try {
        const [rows] = await conn.query(
            "INSERT INTO MEMBER (name, position, email, club) VALUES (?, ?, ?, ?)",
            [name, role, email, club]
        );
        const [pic] = await conn.query("SELECT c.pic, c.id FROM CLUB c WHERE c.id = ?", [club]);
        res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error adding member");
    }
});

export const addSponsor = asyncHandler(async (req, res) => {
    const { from_Company, value, club } = req.body;

    if (!from_Company || !value || !club) {
        res.status(BAD_REQUEST);
        throw new Error("All fields (from_Company, value, club) are required");
    }
    try {
        const [rows] = await conn.query(
            "INSERT INTO SPONSOR (from_Company, value, club) VALUES (?, ?, ?)",
            [from_Company, value, club]
        );
        const [pic] = await conn.query("SELECT c.pic, c.id FROM CLUB c WHERE c.id = ?", [club]);
        res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error adding sponsor");
    }
});

export const addFund = asyncHandler(async (req, res) => {
    const { value, club } = req.body;

    if (!value || !club) {
        res.status(BAD_REQUEST);
        throw new Error("All fields (value, club) are required");
    }
    try {
        const [rows] = await conn.query(
            "INSERT INTO FUNDS (value, club) VALUES (?, ?)",
            [value, club]
        );
        const [pic] = await conn.query("SELECT c.pic, c.id FROM CLUB c WHERE c.id = ?", [club]);
        res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
    } catch (err) {
        res.status(SERVER_ERROR);
        throw new Error("Error adding fund");
    }
});

export const getClubCompetitions = asyncHandler(async (req, res) => {
    const clubId = req.params.id;
    const [competitions] = await conn.query("SELECT * FROM COMPETITIONS WHERE club = ?", [clubId]);
    res.json(competitions);
  });


export const getClubEvents = asyncHandler(async (req, res) => {
    const clubId = req.params.id;
    const [competitions] = await conn.query("SELECT * FROM EVENT WHERE club = ?", [clubId]);
    res.json(competitions);
});

export const getClubMembers = asyncHandler(async (req, res) => {
    const clubId = req.params.id;
    const [competitions] = await conn.query("SELECT * FROM MEMBER WHERE club = ?", [clubId]);
    res.json(competitions);
});

export const getClubSponsors = asyncHandler(async (req, res) => {
    const clubId = req.params.id;
    const [competitions] = await conn.query("SELECT * FROM SPONSOR WHERE club = ?", [clubId]);
    res.json(competitions);
});

export const getClubFunds = asyncHandler(async (req, res) => {
    const clubId = req.params.id;
    const [competitions] = await conn.query("SELECT * FROM FUNDS WHERE club = ?", [clubId]);
    res.json(competitions);
});

export const deleteClubAssets = asyncHandler(async (req, res) => {
    const assetId = req.params.id;
    try {
        const [pic] = await conn.query("SELECT c.pic, c.id FROM ASSET a JOIN CLUB c ON a.club = c.id WHERE a.id = ?", [assetId]);
        const [result] = await conn.query("DELETE FROM ASSET WHERE id = ?", [assetId]);
        console.log(pic);
        if (result.affectedRows === 0) {
            res.status(NOT_FOUND);
        } else {
            res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ message: "Error deleting asset" });
    }
});

export const deleteClubCompetitions = asyncHandler(async (req, res) => {
    const competitionId = req.params.id;
    try {
        const [pic] = await conn.query("SELECT c.pic, c.id FROM COMPETITIONS comp JOIN CLUB c ON comp.club = c.id WHERE comp.uid = ?", [competitionId]);
        const [result] = await conn.query("DELETE FROM COMPETITIONS WHERE uid = ?", [competitionId]);
        if (result.affectedRows === 0) {
            res.status(NOT_FOUND);
        } else {
            res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ message: "Error deleting competition" });
    }
});

export const deleteClubEvents = asyncHandler(async (req, res) => {
    const eventId = req.params.id;
    try {
        const [pic] = await conn.query("SELECT c.pic, c.id FROM EVENT e JOIN CLUB c ON e.club = c.id WHERE e.uid = ?", [eventId]);
        const [result] = await conn.query("DELETE FROM EVENT WHERE uid = ?", [eventId]);
        if (result.affectedRows === 0) {
            res.status(NOT_FOUND);
        } else {
            res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ message: "Error deleting event" });
    }
});

export const deleteClubMembers = asyncHandler(async (req, res) => {
    const memberId = req.params.id;
    try {
        const [pic] = await conn.query("SELECT c.pic, c.id FROM MEMBER m JOIN CLUB c ON m.club = c.id WHERE m.id = ?", [memberId]);
        const [result] = await conn.query("DELETE FROM MEMBER WHERE id = ?", [memberId]);
        if (result.affectedRows === 0) {
            res.status(NOT_FOUND);
        } else {
            res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ message: "Error deleting member" });
    }
});

export const deleteClubSponsors = asyncHandler(async (req, res) => {
    const sponsorId = req.params.id;
    try {
        const [pic] = await conn.query("SELECT c.pic, c.id FROM SPONSOR s JOIN CLUB c ON s.club = c.id WHERE s.id = ?", [sponsorId]);
        const [result] = await conn.query("DELETE FROM SPONSOR WHERE id = ?", [sponsorId]);
        if (result.affectedRows === 0) {
            res.status(NOT_FOUND);
        } else {
            res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ message: "Error deleting sponsor" });
    }
});

export const deleteClubFunds = asyncHandler(async (req, res) => {
    const fundId = req.params.id;
    try {
        const [pic] = await conn.query("SELECT c.pic, c.id FROM FUNDS f JOIN CLUB c ON f.club = c.id WHERE f.id = ?", [fundId]);
        const [result] = await conn.query("DELETE FROM FUNDS WHERE id = ?", [fundId]);
        if (result.affectedRows === 0) {
            res.status(NOT_FOUND);
        } else {
            res.status(SERVER_OK).redirect(`/clubs/kdp6U2HBnl${pic[0].pic}/edit/H7g6f9Jf${pic[0].id}`);
        }
    } catch (error) {
        res.status(SERVER_ERROR).json({ message: "Error deleting fund" });
    }
});