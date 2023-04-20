import * as dao from "../../player-profiles/profile-dao.js";




const PlayerProfileController = (app) => {
    const findComments = async (req, res) => {
        const results = await dao.findCommentsById(req.params);
        res.json(results);
    };

    const findAll = async (req, res) => {
        const all = await dao.findAllProfileComments();
        res.json(all);
    };

    const createChat = async (req, res) => {
        const chat = req.body;
        const newChat = await dao.createChats(chat);
        res.json(newChat);
    };

    app.get("/api/chat", findAll)
    app.get("/api/chat/:pid", findComments);
    app.post("/api/chat", createChat);


};

export default PlayerProfileController;