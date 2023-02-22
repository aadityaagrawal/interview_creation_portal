const mongoose = require("mongoose")

const alienSchema = new mongoose.Schema({

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
    Note : {
        type : String,
        required : false
    },

})


module.exports = mongoose.model("Alien", alienSchema
)