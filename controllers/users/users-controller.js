import * as dao from "../../users/users-dao.js";



const UsersController = (app) => {
    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    };
    const findUserById = async (req, res) => {
        const user = await dao.findUserById(req.params.id);
        res.json(user);
    };
    const createUser = async (req, res) => {
        const user = req.body;
        const newUser = await dao.createUser(user);
        res.json(newUser);
    };

    const updateUser = async (req, res) => {
        const user = req.body;
        const status = await dao.updateUser(req.params.id, user);
        req.session["currentUser"] = user;
        res.send(status);
    };
    const deleteUser = async (req, res) => {
        const status = await dao.deleteUser(req.params.id);
        res.send(status);
    };
    const login = async (req, res) => {
        const user = await dao.findUserByCredentials(req.body);

        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(401);
        }
    };


    const logout = async (req, res) => {
        req.session.destroy();
        // currentUser = null;
        res.sendStatus(200);
    };
    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        res.send(currentUser);
    };

    const register = async (req, res) => {
        const user = req.body;
        const existingUser = await dao.findUserByUsername(user.username);
        if (existingUser) {
            res.sendStatus(409);
            return;
        }
        const newUser = await dao.createUser(user);
        req.session.currentUser = newUser;
        res.json(newUser);
    };

    app.post("/api/users/login", login);
    app.post("/api/users/logout", logout);
    // app.get("/api/users/profile", profile);
    //app.get("/api/users/:username/:password", findChloe);
    app.post("/api/users/register", register);
    app.post("/api/users/profile", profile);

    app.get("/api/users", findAllUsers);
    app.get("/api/users/profile/:id", findUserById);
    app.post("/api/users", createUser);
    app.put("/api/users/:id", updateUser);
    app.delete("/api/users/delete/:id", deleteUser);
};

export default UsersController;