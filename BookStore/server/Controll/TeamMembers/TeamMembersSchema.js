const { default: mongoose } = require("mongoose");

const teamMemSchema = mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Dob:{type:Number},
    Gender:{type:String},
    Description:{type:String},
    Role:{type:String},
    Mobile:{type:Number},
    ProfilePicture:{type:String}
})

const teamMemModle = mongoose.model("TeamMembers",teamMemSchema)

module.exports = teamMemModle