import * as dao from "../../wall/wall-dao.js";




const WallController = (app) => {

    const findAll = async (req, res) => {

        const all = await dao.findAllWallPosts();
        res.json(all);
    };


    const createPost = async (req, res) => {
        const chat = req.body;
        console.log(chat)
        chat.date = (new Date()).getTime();
        // users.push(user);
        console.log(chat);
        const newChat = await dao.createWallPost(chat);
        res.json(newChat);
    };

    app.get("/api/wall", findAll)
    // app.get("/api/wall/:pid", findComments);
    app.post("/api/wall", createPost);


};

export default WallController;