const express = require("express")
const router = express.Router()
const Alien = require("../models/alien")
const User = require("../models/user")
const session = require("express-session");
const flash = require("connect-flash");


router.get("/", async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.render('main_page', { data: aliens })
    } catch (err) {
        res.send("Error " + err)
    }
})

router.post("/", async (req, res) => {
    console.log(req.body)
    var start = req.body.Start + ':00';
    var end = req.body.End + ':00';
    var date = req.body.Date;
    var par = req.body.Participants.split(" ");
    console.log(par.length);
    if (par.length <= 2) {
        var ms="Please enter atleast 3 Participants"
        res.render("error",{data:ms})
    }
    else{
    if (start > end) {
        var ms="Start time is greater than end time"
        res.render("error",{data:ms})
    }
    const aliens = await Alien.find()

    var final = [];
    aliens.forEach(element => {
        if (element.Date == date) {

            var check = element.End + ':00';

            if (start < check) {

              var ans = element.Participants.split(" ");
              console.log(ans)

                for (var i = 0; i < par.length; i++) {
                    for (var j = 0; j < ans.length; j++) {
                        if (ans[j] == par[i]) {
                            final.push(par[i]);
                        }
                    }
                }
                console.log(par);

                console.log(final)
            }

        }
    });
    if (final != 0) {
        console.log(final)
          var msg=" Hold on there is a colliton of time for these particpants are busy at this time"
        res.render('error2', { data: msg, who:final });
    }
    else {
        const alien = new Alien({
            Meetid: req.body.Meetid,
            Title: req.body.Title,
            Interviewer: req.body.Interviewer,
            Location: req.body.Location,
            Link: req.body.Link,
            Date: req.body.Date,
            Start: req.body.Start,
            End: req.body.End,
            Participants: req.body.Participants,
            Note: req.body.Note

        })
        try {
            const a1 = await alien.save()
            res.redirect("/aliens")
        } catch (err) {
            res.send("Error" + err)
        }
    }
}
})



router.get("/try", async (req, res) => {
    res.render("index")
})

router.get('/:id', async (req, res) => {

    const interview = await Alien.findById(req.params.id);
    //const interview = {Title: "SCALAR"};
    res.render('edit-interview', { data: interview });
})

router.post('/update/:id', async (req, res) => {
   
    const change = req.body;
   
    try {
       
        const interview = await Alien.findByIdAndUpdate(req.params.id, {$set:change},{new:true});
        console.log(interview)
        interview.save()
        res.redirect("/aliens");
    } catch (err) {
        console.error(err);
        
    }
})

// DESTROY Interview
router.get("/delete/:id", (req, res)=>{
   

    Alien.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            console.log(err);
        }else{
            // req.flash('success',"Interview successfully deleted");
            res.redirect("/aliens");
        }
    })
})

module.exports = router