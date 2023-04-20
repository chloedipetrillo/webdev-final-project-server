import * as dao from "../../my-team/my-team-dao.js";

const MyTeamController = (app) => {

    const createMyTeam = async (req, res) => {
        // const currentUser = req.session["currentUser"]
        const players = req.body;

        // console.log("list of players here is : " + players.team)
        const newTeam = await dao.createTeam(players);
        res.json(newTeam);
    };

    const findMyTeam = async (req, res) => {
        // const currentUser = req.session["currentUser"]
        const players = req.body;

        console.log("user id in server find is :  " + players.userId)
        const newTeam = await dao.findTeam(players.userId);
        console.log("find team in server is : " + newTeam)
        res.json(newTeam);
    };

    const updateMyTeam = async (req, res) => {
        // const currentUser = req.session["currentUser"]
        const players = req.body;

        // console.log("list of players here is : " + players.team)
        const newTeam = await dao.updateTeam(players.userId, players.team);
        res.json(newTeam);
    };

    const deleteMyTeam = async (req, res) => {
        // const currentUser = req.session["currentUser"]
        const players = req.body;

        // console.log("list of players here is : " + players.team)
        const newTeam = await dao.deleteTeam(players.userId);
        res.json(newTeam);
    };

    app.post("/api/myTeam", createMyTeam);
    app.get("/api/myTeam/:pid", findMyTeam);
    app.put("/api/myTeam/:pid", updateMyTeam);
    app.delete("/api/myTeam/:pid", deleteMyTeam);
};

export default MyTeamController;