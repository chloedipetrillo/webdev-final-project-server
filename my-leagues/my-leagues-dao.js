import myLeaguesModel from "./my-leagues-model.js";

export const createLeague = async (team) => await myLeaguesModel.create(team);

export const findLeague = async (pid) => {
    const users = await myLeaguesModel.find({userId: pid});
    return users;
};

export const deleteLeague = async (pid) => myLeaguesModel.deleteOne({_id: pid});

export const updateLeague = async (pid, team) => {
    const status = await myLeaguesModel.updateOne({ _id: pid },{team: team});
    return status;
};
