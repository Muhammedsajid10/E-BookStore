const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'userModel', required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'bookModel', required: true },
      Count: { type: Number, required: true },
      Prize: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true },
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    mobile: {type: String, required: true}
  },
  paymentStatus: { type: String, default: 'pending' },
  orderDate: { type: Date, default: Date.now }
});

const userOrderModel = mongoose.model("userOrder", orderSchema);

module.exports = userOrderModel;
