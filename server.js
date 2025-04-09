import express from "express";
import dotenv from "dotenv";

import {clubRouter} from "./routes/clubRoutes.js";
import {authRouter} from "./routes/authRoutes.js";
import {assetRouter} from "./routes/assetRoutes.js";

import {errorHandler} from "./middlewares/errorHandler.js";
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use("/clubs", clubRouter);
app.use("/auth", authRouter);
app.use("/assets", assetRouter);
app.use(errorHandler);

app.listen(port,() => {
    console.log(`listening to ${port}`); 
})

