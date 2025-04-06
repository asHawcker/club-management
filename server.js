import express from "express";
import dotenv from "dotenv";
import {router} from "./routes/clubRoutes.js";
import {errorHandler} from "./middlewares/errorHandler.js";

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/clubs", router);
app.use(errorHandler);

app.listen(port,() => {
    console.log(`listening to ${port}`); 
})

