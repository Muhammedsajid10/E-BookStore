const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
    FirstName:{type:String},
    SecondName:{type:String},
    Email:{type:String},
    Password:{type:String}
})

const adminModel = mongoose.model("Admin",AdminSchema)

module.exports = adminModel;