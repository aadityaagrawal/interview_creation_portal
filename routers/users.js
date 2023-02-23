const express = require("express")
const router = express.Router()
const User = require("../models/user")


router.get("/", async (req, res) => {
    console.log("RightPlace")
    try {
        const user = await User.find({});
        res.json(user);
        console.log(user);
    } catch (err) {
        res.send("Error " + err)
    }
})

router.post("/", async (req, res) => {
    console.log("rightplace")
    console.log(req.body.Start)
    const user = new User({
        Name: req.body.Name,
        Email: req.body.Email,
        Mobile: req.body.Mobile
    })
    try {
        const a1 = await user.save()
        res.json(a1)
    } catch (err) {
        res.send("Error"+err)
    }
})

module.exports = router