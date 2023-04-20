import profileModel from "./profile-model.js";
import usersModel from "../users/users-model.js";


export const findCommentsById = async ({pid}) => {
    const user = await profileModel.find({pid});
    return user;
};


export const findAllProfileComments = async () => {
    const users = await profileModel.find();
    return users;
};

export const findUserById = async (id) => {
    const user = await profileModel.findById({id});
    return user;
};

export const createChats = async (chat) => {
    const newChat = await profileModel.create(chat);
    return newChat;
};