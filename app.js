import express from 'express';
import cors from 'cors'
import Users from "./controllers/users/users.js";
import UserController from "./controllers/users/users-controller.js";
import PlayerController from "./controllers/players/player-controller.js";


// getApi(api_url);

const app = express();
app.use(cors())
app.use(express.json());

app.listen(4000);
UserController(app)
PlayerController(app)
app.get("/", (req, res) => {res.send("welcome")});
