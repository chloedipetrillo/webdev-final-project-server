import myLeaguesModel from "./my-leagues-model.js";


export const createLeague = async (league) => await myLeaguesModel.create(league);

export const findLeaguesByCommissioner = async (id) => {
    const leagues = await myLeaguesModel.find({commissionerId: id});
    return leagues;
};

export const findIfLeague = async (name) => {
    const league = await myLeaguesModel.findOne({leagueName: name});
    console.log(league)
    return league;
};

// export const deleteLeague = async (pid) => myLeaguesModel.deleteOne({_id: pid});

// export const updateLeague = async (pid, team) => {
//     const status = await myLeaguesModel.updateOne({ _id: pid },{team: team});
//     return status;
// };
