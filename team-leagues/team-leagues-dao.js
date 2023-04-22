import teamLeaguesModel from "./team-leagues-model.js";



export const findAllLeaguesJoined = async (userId) => {
    return await teamLeaguesModel.find({userId});
};

export const findAllUsersInThisLeague = async (leagueId) => {
    return await teamLeaguesModel.find({leagueId});
};


export const joinLeague = async (join) => await teamLeaguesModel.create(join);
//
// export const followers = async (followed) => {
//     return await followsModel.find({followed: followed})
//         .populate("follower", "username firstName image").exec();
// };
//
//
// export const following = async (follower) => {
//     return await followsModel.find({follower: follower})
//         .populate("followed","username firstName image").exec();
// };

export const findIfAlreadyJoined = async ({ leagueId, userId }) => {
    const l = await teamLeaguesModel.findOne({ leagueId, userId });
    return l;
};
