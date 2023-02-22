const express = require("express")
const router = express.Router()
const Alien = require("../models/alien")
// const User = require("../models/user")

router.get("/", async (req, res) => {
    try {
        const aliens = await Alien.find()
       res.render('main_page',{data:aliens})
    } catch (err) {
        res.send("Error " + err)
    }
})

router.post("/", async (req, res) => {
    console.log("rightplace")
    console.log(req.body.Start)
    const alien = new Alien({
        Title: req.body.Title,
        Interviewer: req.body.Interviewer,
        Location: req.body.Location,
        Link: req.body.Link,
        Date: req.body.Date,
        Start: req.body.Start,
        End: req.body.End,
        Note: req.body.Note

    })
    try {
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.send("Error"+err)
    }
})



router.get("/try", async (req, res) => {
    res.render("index")
})

router.get('/:id', async(req,res) => {
    const interview = await Alien.findById(req.params.id);
    //const interview = {Title: "SCALAR"};
    res.render('edit-interview', {data:interview});
})

router.post('/update/:id', async (req,res) => {
    const { Title,Interviewer,Location,Link,Date,Start,End,Note} = req.body;
    try {
        const interview = await Alien.findByIdAndUpdate(req.params.id, {Title,Interviewer,Location,Link,Date,Start,End,Note}, {new: true});
        await interview.save();
        res.redirect(`/aliens/${req.params.id}`);
    } catch (err){
        console.error(err);
    }
})
// User Data

// router.post("/user", async (req, res) => {
//     console.log("rightplace")
//     console.log(req.body.Start)
//     const user = new User({
//         Name: req.body.Name,
//         Email: req.body.Email,
//         Mobile: req.body.Mobile
//     })
//     try {
//         const a1 = await user.save()
//         res.json(a1)
//     } catch (err) {
//         res.send("Error"+err)
//     }
// })

module.exports = router