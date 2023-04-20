import * as dao from "../../follows/follows-dao.js";




const FollowsController = (app) => {

    const followPerson = async (req, res) => {
        const currentUser = req.session["currentUser"]
        const followed = req.params.followed;
        const user = await dao.findIfFollowing({follower:currentUser._id, followed})
        if (user){
            res.sendStatus(409);
            return;
        }
        else {
            const combination = currentUser._id + followed
            const newFollow = {follower : currentUser._id, followed, combination}
            const f = await dao.followUser(newFollow)
            res.json(f);
        }


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

    const unfollowPerson = async (req, res) => {
        const currentUser = req.session["currentUser"]
        const followed = req.params.followed;
        const user = await dao.findIfFollowing({follower:currentUser._id, followed})
        if (!user){
            res.sendStatus(409);
            return;
        }
        const toDelete = {follower:currentUser._id, followed}
        const status = await dao.unfollowUser(toDelete)
        res.json(status);
    };


    app.post("/api/follows/:followed", followPerson);
    app.get("/api/follows/followers/:followed", followers);
    app.get("/api/follows/following/:follower", following);
    app.delete("/api/follows/:followed", unfollowPerson);

};

export default FollowsController;