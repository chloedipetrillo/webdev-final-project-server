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
    console.log("dao")
    console.log(post)
    const newPost = await wallModel.create(post);
    return newPost;
};