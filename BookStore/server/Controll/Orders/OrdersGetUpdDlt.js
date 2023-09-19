const orderModel = require("./OrdersSchema")

const orderGetUpdDlt = async (req,res) => {
    const getId = req.params.id


    if(req.method === 'GET'){
        try {
            const getOrder = await orderModel.find()
            res.json(getOrder)
        } catch (error) {
            res.json(`Error on get order : ${error}`)
        }
    }
    else if(req.method === 'PUT'){
        const {ProductId,Fname,Sname,ProductNo,OrderDate} = req.body
        try {
            const updateOrder = await orderModel.findByIdAndUpdate(getId,{ProductId,Fname,Sname,ProductNo,OrderDate})
            res.json(updateOrder)
        } catch (error) {
            res.json(`Error on update order : ${error}`)
        }
    }
    else if(req.method === 'DELETE'){
        try {
            const dtlOrder = await orderModel.findByIdAndDelete(getId)
            res.json(dtlOrder)
        } catch (error) {
            res.json('Error on delete order : ',error)
        }
    }
}


const getOrderPass = async (req,res) => {
     const id = req.params.id;
    try {
        const getOrder = await orderModel.findById({_id:id})
        res.json(getOrder)
    } catch (error) {
        res.json('error on get order by passing : ',error)
        
    }
}

module.exports = {orderGetUpdDlt,getOrderPass};