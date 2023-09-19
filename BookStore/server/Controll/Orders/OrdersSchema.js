const mongoose = require('mongoose')

const orderSchem = mongoose.Schema({
    ProductId:{type:Number},
    Fname:{type:String},
    Sname:{type:String},
    ProductNo:{type:Number},
    OrderDate:{type:Date}
})

const orderModel = mongoose.model("Orders",orderSchem)

module.exports = orderModel;