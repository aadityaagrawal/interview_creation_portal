const express = require("express")
const router = express.Router()
const User = require("../models/user")


router.get("/", async (req, res) => {
    console.log("RightPlace")
    try {
        const user = await User.find({});
        res.render('users',{data:user})
    } catch (err) {
        res.send("Error " + err)
    }
})

router.get("/form", async (req, res) => {
    res.render('userform')
})
router.post("/", async (req, res) => {
    console.log("rightplace")
    console.log(req.body)
    const user = new User({
        Uid:req.body.Uid,
        Name: req.body.Name,
        Email: req.body.Email,
        Mobile: req.body.Mobile
    })
    try {
        const a1 = await user.save()
        res.redirect("/users")
    } catch (err) {
        res.send("Error"+err)
    }
})

module.exports = router