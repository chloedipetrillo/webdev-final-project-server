import * as dao from "../../team-leagues/team-leagues-dao.js";
import {findAllLeaguesJoined} from "../../team-leagues/team-leagues-dao.js";




const LeagueJoinController = (app) => {

    const joinALeague = async (req, res) => {
        const userId = req.body.userId
        const leagueId = req.body.leagueId;
        const leagueName = req.body.leagueName;
        const l = await dao.findIfAlreadyJoined({leagueId, userId})
        if (l){
            res.sendStatus(409);
            return;
        }
        else {
            const combination = userId + leagueId
            const newJoin = {leagueId, userId, leagueName, combination}
            const f = await dao.joinLeague(newJoin)
            res.json(f);
        }


    };

    const findLeaguesUserJoined = async (req, res) => {
        const userId = req.params.userId;
        const leagues = await dao.findAllLeaguesJoined(userId);
        res.json(leagues);
    };



    app.post("/api/teamLeagues/", joinALeague);
    app.get("/api/teamLeagues/:userId", findLeaguesUserJoined);
    // app.get("/api/follows/following/:follower", following);
    // app.delete("/api/follows/:followed", unfollowPerson);

};

export default LeagueJoinController;