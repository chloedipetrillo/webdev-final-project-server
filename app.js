import PlayerController from "./controllers/players/player-controller.js";
import SearchController from "./controllers/search/search-controller.js";
import express from 'express';
import session from "express-session"
import cors from 'cors'
import mongoose from "mongoose";
import UserController from "./controllers/users/users-controller.js";
import PlayerProfileController from "./controllers/player-profile-controller/player-profile-controller.js";
import WallController from "./controllers/wall/wall-controller.js";
import FollowsController from "./controllers/follows/follows-controller.js";
import MyTeamController from "./controllers/my-team/my-team-controller.js";
import MyLeaguesController from "./controllers/my-leagues/my-league-controller.js";
import LeagueJoinController from "./controllers/team-league/team-league-controller.js";

mongoose.connect('mongodb+srv://finalproject:5610@cluster0.txfreg4.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect('mongodb://127.0.0.1:27017/fantasy');
// const app = express();
//
// app.use(express.json());
// app.use(
//     cors({
//         credentials: true,
//         origin: "http://localhost:3000",
//     })
// );
// app.use(
//     session({
//         secret: "secret",
//         resave: false,
//         saveUninitialized: true,
//         cookie: { secure: false },
//     })
// );

const app = express();
app.use(
    session({
        secret: "asdfasdfasdfasdf",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());

// mongoose.connect('mongodb://127.0.0.1:27017/fantasy');


app.listen(4000);

PlayerProfileController(app);
UserController(app)
PlayerController(app);
SearchController(app);
WallController(app);
FollowsController(app)
MyTeamController(app);
MyLeaguesController(app);
LeagueJoinController(app);


