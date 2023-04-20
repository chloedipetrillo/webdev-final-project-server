import myTeamModel from "./my-team-model.js";
import profileModel from "../player-profiles/profile-model.js";


export const createTeam = async (team) => await myTeamModel.create(team);
