import myTeamModel from "./my-team-model.js";

export const createTeam = async (team) => await myTeamModel.create(team);

export const findTeam = async (pid) => {
    const users = await myTeamModel.findOne({userId: pid});
    return users;
};

export const deleteTeam = async (pid) => myTeamModel.deleteOne({_id: pid});

export const updateTeam = async (pid, team) => {
    const status = await myTeamModel.updateOne({ _id: pid },{team: team});
    return status;
};
