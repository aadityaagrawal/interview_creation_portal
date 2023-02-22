const express = require("express")
const router = express.Router()
// const Alien = require("../models/alien")
const User = require("../models/user")


router.get("/", async (req, res) => {
    try {
        const user = await User.find()
        res.render('main_page',{data:users})
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