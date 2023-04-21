import * as dao from "../../my-team/my-team-dao.js";

const MyTeamController = (app) => {

    const createMyTeam = async (req, res) => {
        // const currentUser = req.session["currentUser"]
        const players = req.body;
        console.log("CHLOE HERE IS  REQ BODY")
        console.log(req.body)
        const team = await dao.findTeam(players.userId)
        if (team) {
            res.sendStatus(409);
            return
        }
        else {
            const newTeam = await dao.createTeam(players);
            res.json(newTeam);
        }

    };

    const findMyTeam = async (req, res) => {
        // const currentUser = req.session["currentUser"]
        const players = req.params;
        // console.log(players)
        // console.log("user id in server find is :  " + players.pid)
        const newTeam = await dao.findTeam(players.pid);
        // console.log("find team in server is : " + newTeam)
        res.json(newTeam);
    };

    const updateMyTeam = async (req, res) => {
        // const currentUser = req.session["currentUser"]
        const entry = req.body;
        const status = await dao.updateTeam(req.params.pid, entry)
        console.log("UPDATE MY TEAM")
        console.log(req.body)
        res.send(status);
        //const teamEntry = await dao.findTeam(players.userId)
        // console.log(teamEntry)
        // console.log("list of players here is : " + players.team)
        // const newTeam = await dao.updateTeam(req.params.tid, updates);
        // res.json(newTeam);
    };

    const deleteMyTeam = async (req, res) => {
        // const currentUser = req.session["currentUser"]
        const players = req.params.pid;
        const toDelete = await dao.findTeam(players);

        // console.log("list of players here is : " + players.team)
        const newTeam = await dao.deleteTeam(toDelete._id);
        res.json(newTeam);
    };

    app.post("/api/myTeam", createMyTeam);
    app.get("/api/myTeam/:pid", findMyTeam);
    app.put("/api/myTeam/:pid", updateMyTeam);
    app.delete("/api/myTeam/:pid", deleteMyTeam);
};

export default MyTeamController;