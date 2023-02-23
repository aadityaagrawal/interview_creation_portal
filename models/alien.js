const mongoose = require("mongoose")

const alienSchema = new mongoose.Schema({
    Meetid : {
        type: String,
        required : true
    },

    Title : {
        type: String,
        required : true
    },
    Interviewer : {
        type: String,
        required : false
    },
    Location: {
        type: String,
        required : true
    },
    Link : {
        type : String,
        required : true,
        default : ""
    }, 
    Date: {
        type: String,
        required : true
    },
    Start : {
        type : String,
        required : true
    },
    End : {
        type : String,
        required : true
    },
    Participants : {
        type : String,
        required : false
    },
    Note : {
        type : String,
        required : false
    },

})


module.exports = mongoose.model("Alien", alienSchema
)