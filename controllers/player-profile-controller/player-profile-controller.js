import * as dao from "../../player-profiles/profile-dao.js";




const PlayerProfileController = (app) => {

    const findComments = async (req, res) => {
        console.log(req.params)
        // const user = users.find((user) => user.id === req.params.id);
        const results = await dao.findCommentsById(req.params);
        console.log(results)

        res.json(results);
    };

    const findUserById = async (req, res) => {
        // const user = users.find((user) => user.id === req.params.id);
        const user = await dao.findUserById(req.params.id);
        res.json(user);
    };
    const findAll = async (req, res) => {

        const all = await dao.findAllProfileComments();
        res.json(all);
    };

    const addComment = async (req, res) => {
        const personToUpdate = req.params.id;
        const person = await dao.findUserById(req.params.id);
        console.log(req.params.id);
        person["comments"].push(req.body.comment)
        const updates = req.body;
        console.log(req.body);
        console.log(req.params.id);
        // const status = await dao.addComments(personToUpdate, )
    }

    // const updateTuit = async (req, res) => {
    //     const tuitdIdToUpdate = req.params.tid;
    //     const updates = req.body;
    //     const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    //     res.json(status);
    // }

    const createChat = async (req, res) => {
        const chat = req.body;
        // users.push(user);
        console.log(chat);
        const newChat = await dao.createChats(chat);
        res.json(newChat);
    };

    app.get("/api/chat", findAll)
    app.get("/api/chat/:pid", findComments);
    app.post("/api/chat", createChat);


};

export default PlayerProfileController;