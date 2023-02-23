const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Uid:{
        type: String,
        required : true  
    },
    Name:{
        type: String,
        required : true  
    },
    Email:{
        type: String,
        required : true  
    },
    Mobile:{
        type: Number,
        required : true  
    }
    
})

module.exports = mongoose.model("User", userSchema
)