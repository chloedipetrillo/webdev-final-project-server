import * as dao from "../../my-leagues/my-leagues-dao.js";




const MyLeaguesController = (app) => {

    const createLeague = async (req, res) => {
        console.log("CREATE LEAGUE CONTROLLER")
        const commissionerId = req.body.commissionerId
        console.log(req.body)
        const leagueName = req.body.leagueName;
        const league = await dao.findIfLeague(leagueName)
        if (league){
            res.sendStatus(409);
            return;
        }
        else {
            const newLeague = {commissionerId, leagueName}
            const l = await dao.createLeague(newLeague)
            res.json(l);
        }
    };

    const findLeaguesManaged = async (req, res) => {
        const leagues = await dao.findLeaguesByCommissioner(req.params.cid);
        res.json(leagues);
    };



    app.post("/api/myLeagues/newLeague", createLeague);
    app.get("/api/myLeagues/:cid", findLeaguesManaged);
    // app.get("/api/follows/following/:follower", following);
    // app.delete("/api/follows/:followed", unfollowPerson);

};

export default MyLeaguesController;