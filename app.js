const express = require("express")
const mongoose = require("mongoose")
const path = require("path")


const bodyparser=require("body-parser")

const url = "mongodb+srv://aditya:aditya@cluster0.hkjokpz.mongodb.net/?retryWrites=true&w=majority"
const app = express()



mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on("open", function(){
    console.log("connected..")
})
app.use(bodyparser.urlencoded({extended : true}))


app.set("view engine","ejs")

app.use(express.static("public"))

app.use(express.json())


const alienRouter = require("./routers/aliens")
const userRouter = require("./routers/users")
app.use("/aliens", alienRouter)
app.use("/users", userRouter)





app.listen(9000,function(){
    console.log("Server Started")
} )




