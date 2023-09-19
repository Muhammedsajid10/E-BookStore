const mongoose = require('mongoose')

const userSchem = mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String}
})

const userModel = mongoose.model('user',userSchem)

module.exports = userModel;