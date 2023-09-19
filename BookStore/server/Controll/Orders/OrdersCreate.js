const orderModel = require('./OrdersSchema')

const createOrder = async (req,res) => {
    const {ProductId,Fname,Sname,ProductNo,OrderDate} = req.body;
    const orderDetails = await orderModel.create({
        ProductId,Fname,Sname,ProductNo,OrderDate
    })
    res.json(orderDetails)
}

module.exports = createOrder