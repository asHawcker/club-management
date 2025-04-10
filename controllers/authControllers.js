import { conn } from "../config/db-setup.js";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";

dotenv.config();

const BAD_REQUEST = parseInt(process.env.BAD_REQUEST, 10);
const SERVER_ERROR = parseInt(process.env.SERVER_ERROR, 10);
const NOT_FOUND = parseInt(process.env.NOT_FOUND, 10);
const SERVER_OK = parseInt(process.env.SERVER_OK, 10);

export const getAuthPage = asyncHandler(async (req, res) => {
    res.render('auth', { error: null });
});

export const attemptAuth = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await conn.query(
            'SELECT * FROM PIC WHERE email = ? AND pass_w = ?',
            [email, password]
        );

        if (rows.length === 0) {
            res.render('auth', { error: 'Invalid email or password.' });
        } else {
            res.redirect(`/clubs/kdp6U2HBnl${rows[0].id}/e7aYVh2`);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});