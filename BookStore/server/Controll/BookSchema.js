const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    Name:{type:String},
    Author:{type:String},
    PublicationName:{type:String},
    Year:{type:Number},
    Prize:{type:Number},
    Availability:{type:String}
})

const bookModel = mongoose.model('Books',bookSchema);

module.exports = bookModel;