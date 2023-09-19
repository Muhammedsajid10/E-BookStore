const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'bookModel', required: true }, // Assuming 'Book' is the name of your book model
    Name: { type: String, required: true },
    Prize: { type: Number, required: true },
    Count: { type: Number, required: true, default: 1 },
    InitialPrize: {type: Number, required: true }
});

const cartModel = mongoose.model('Cart', cartSchema);

module.exports = cartModel;
