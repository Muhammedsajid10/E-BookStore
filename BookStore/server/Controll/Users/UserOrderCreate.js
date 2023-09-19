// const userOrderModel = require("./UserOrderSchema");


// const createUserOrder = async (req, res) => {
//   const { userId, items, total, shippingAddress, paymentStatus, orderDate } = req.body;
//   console.log('Received request data:', req.body);
//   console.log('userId:', userId);
//   console.log('items:', items);
//   console.log('total:', total);
//   console.log('shippingAddress:', shippingAddress);


//   try {
//     const orderDetails = await userOrderModel.create({
//       userId,
//       items,
//       total,
//       shippingAddress,
//       paymentStatus, 
//       orderDate
//     });

//     res.status(201).json(orderDetails);
//   } catch (error) {
//     console.error('Error creating order:', error);
//     res.status(500).json({ error: 'Failed to create order' });
//   }
// };


// module.exports = createUserOrder;






const userOrderModel = require("./UserOrderSchema");


const createUserOrder = async (req, res) => {
  const { UserId, cartItems, totalPrize, shippingAddress, paymentStatus, orderDate } = req.body;
  console.log('Received request data:', req.body);
  console.log('UserId:', UserId);
  console.log('cartItems:', cartItems);
  console.log('totalPrize:', totalPrize);
  console.log('shippingAddress:', shippingAddress);

  try {
    const orderDetails = await userOrderModel.create({
      userId: UserId,
      items: cartItems.map(item => ({
        product: item.bookId, 
        Count: item.Count,
        Prize: item.Prize
      })),
      total: totalPrize,
      shippingAddress: {
        address: shippingAddress.address,
        city: shippingAddress.city,
        mobile: shippingAddress.mobile
      },
      paymentStatus,
      orderDate
    });

    res.status(201).json(orderDetails);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

module.exports = createUserOrder;

