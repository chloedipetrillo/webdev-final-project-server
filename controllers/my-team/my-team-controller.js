import * as dao from "../../my-team/my-team-dao.js";

const MyTeamController = (app) => {

    const createMyTeam = async (req, res) => {
        const currentUser = req.session["currentUser"]
        const players = req.body;
        console.log("list of players here is : " + JSON.stringify(players))
        const newTeam = await dao.createTeam(players);
        res.json(newTeam);
    };

    app.post("/api/myTeam", createMyTeam);

};

export default MyTeamController;