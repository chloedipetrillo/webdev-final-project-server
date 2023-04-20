import wallModel from "./wall-model.js";



export const findCommentsById = async ({pid}) => {
    const user = await wallModel.find({pid});
    return user;
};


export const findAllWallPosts = async () => {
    const posts = await wallModel.find();
    return posts;
};

export const findUserById = async (id) => {
    const user = await wallModel.findById({id});
    return user;
};

export const createWallPost = async (post) => {
    const newPost = await wallModel.create(post);
    return newPost;
};

export const deleteWallPost = async (id) => wallModel.deleteOne({_id: id});