const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const Alien = require("./models/alien")
require('dotenv').config(); 
const bodyparser=require("body-parser")

const url = process.env.API_KEY;
const app = express()

mongoose.set('strictQuery', false);

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on("open", function(){
    console.log("connected..")
})
app.use(bodyparser.urlencoded({extended : true}))


app.set("view engine","ejs")

app.use(express.static("public"))

app.use(express.json())
app.get("/", async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.render('main_page', { data: aliens })
    } catch (err) {
        res.send("Error " + err)
    }
})



const alienRouter = require("./routers/aliens")
const userRouter = require("./routers/users")
app.use("/aliens", alienRouter)
app.use("/users", userRouter)





app.listen(9000,function(){
    console.log("Server Started")
} )




