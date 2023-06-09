import * as dao from "../../wall/wall-dao.js";




const WallController = (app) => {

    const findAll = async (req, res) => {

        const all = await dao.findAllWallPosts();
        res.json(all);
    };


    const createPost = async (req, res) => {
        const chat = req.body;
        chat.date = (new Date()).getTime();
        const newChat = await dao.createWallPost(chat);
        res.json(newChat);
    };

    const deletePost = async (req, res) => {
        const postIdToDelete = req.params.id;
        const status = await dao.deleteWallPost(postIdToDelete);
        res.json(status);
    }



    app.get("/api/wall", findAll)
    // app.get("/api/wall/:pid", findComments);
    app.post("/api/wall", createPost);
    app.delete("/api/wall/:id", deletePost);

};

export default WallController;