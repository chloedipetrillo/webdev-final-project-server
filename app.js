import PlayerController from "./controllers/players/player-controller.js";
import SearchController from "./controllers/search/search-controller.js";
import express from 'express';
import session from "express-session"
import cors from 'cors'
import mongoose from "mongoose";
import UserController from "./controllers/users/users-controller.js";

mongoose.connect('mongodb://127.0.0.1:27017/fantasy');
const app = express();

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);
app.listen(4000);
UserController(app)
PlayerController(app);
SearchController(app);



