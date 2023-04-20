import followsModel from "./follows-model.js";



export const findAllFollows = async ({pid}) => {
    const user = await followsModel.find({pid});
    return user;
};



export const followUser = async (follow) => await followsModel.create(follow);

export const followers = async (followed) => {
    return await followsModel.find({followed: followed})
        .populate("follower", "username firstName image").exec();
};


export const following = async (follower) => {
    return await followsModel.find({follower: follower})
        .populate("followed","username firstName image").exec();
};

export const findIfFollowing = async ({ follower, followed }) => {
    const user = await followsModel.findOne({ follower, followed });
    return user;
};

export const unfollowUser = async({follower, followed}) => followsModel.deleteOne({follower, followed})