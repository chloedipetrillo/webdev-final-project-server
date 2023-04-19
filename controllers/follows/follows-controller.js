import * as dao from "../../follows/follows-dao.js";




const FollowsController = (app) => {

    const followPerson = async (req, res) => {
        const currentUser = req.session["currentUser"]
        const followed = req.params.followed;
        const newFollow = {follower : currentUser._id, followed}
        const f = await dao.followUser(newFollow)
        res.json(f);
    };
    const following = async (req, res) => {
        const follower = req.params.follower;
        const following = await dao.following(follower);
        res.json(following);
    };
    const followers = async (req, res) => {
       const followed = req.params.followed;
        const followers = await dao.followers(followed);
       res.json(followers);
    };


    app.post("/api/follows/:followed", followPerson);
    app.get("/api/follows/followers/:followed", followers);
    app.get("/api/follows/following/:follower", following);

};

export default FollowsController;