const cartModel = require("./AddToCart")

const createCart = async (req,res) => {
    const {bookId,Name,Prize,Count,InitialPrize} = req.body
    const cartDetails = await cartModel.create({
        bookId,Name,Prize,Count,InitialPrize
    })
    res.json(cartDetails)
}

// const cartItemGet = async (req,res) => {
//     const getId = req.params.bookId;
//     const cartGet = await cartModel.findOne({bookId:getId})
//     res.json(cartGet)
// }


const cartItemGet = async (req, res) => {
    const getId = req.params.bookId;
    console.log('bookId:', getId);
    const cartGet = await cartModel.findOne({ bookId: getId });
    console.log('cartGet:', cartGet); //  this line to check the value of cartGet
    res.json(cartGet);
}

const getAllCart = async(req,res) => {
    const cartItem = await cartModel.find()
    res.json(cartItem)
}

const updateCartCount = async (req,res) => {
    const getId = req.params.id
    const {Count,Prize,InitialPrize} = req.body
    const update = await cartModel.findByIdAndUpdate(getId,{Count,Prize,InitialPrize})
    res.json(update)
} 

const deleteCart = async (req,res) => {
    const getId = req.params.id;
    try {
        const deletee = await cartModel.findByIdAndDelete(getId)   
        res.json(deletee)
    } catch (error) {
        res.json('error on deleting cart :',error)
    }
    
}


module.exports = {createCart,cartItemGet,getAllCart,updateCartCount,deleteCart};