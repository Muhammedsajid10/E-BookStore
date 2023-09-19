









import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import './ViewCart.css';
import { BiRupee } from 'react-icons/bi';
import { IoTrashBin } from 'react-icons/io5';
import { Table } from 'react-bootstrap'
import jwt_decode from "jwt-decode";
import { newContext } from './Contexts/ViewCartContext';
import ShippingAddressForm from './ShippingAddressForm';
import { useNavigate } from 'react-router-dom';

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrize, setTotalPrize] = useState(0)
  const [UserId, setUserId] = useState(null)
  const {shippingAddress,setShippingAddress} = useContext(newContext);
  const [showShippingAddressForm, setShowShippingAddressForm] = useState(false)


  useEffect(() => {
    viewBook();
  }, []);


  useEffect(() => {
    calculateTotalPrize();
  }, [cartItems])

  const viewBook = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cart`);
      setCartItems(response.data);
    } catch (error) {
      console.log('Error fetching book:', error);
    }
  }

  const alertMessage = () => {
    alert("Count cannot be less than one");
  }

  const updateItemCount = async (itemId, newCount) => {
    try {
      const item = cartItems.find(item => item._id === itemId);
      if (item) {
        const updatedPrize = item.InitialPrize * newCount;
        const response = await axios.put(`http://localhost:5000/cartCountUpdate/${itemId}`, { Count: newCount, Prize: updatedPrize });
        if (response.status === 200) {
          // Update the cartItems array with the new count and updated prize
          setCartItems(prevCartItems =>
            prevCartItems.map(item => (item._id === itemId ? { ...item, Count: newCount, Prize: updatedPrize } : item))
          );
        }
      }
    } catch (error) {
      console.log('Error updating item count:', error);
    }
  };


  const decrementCount = async (itemId) => {
    const item = cartItems.find(item => item._id === itemId);
    if (item) {
      const newCount = item.Count - 1;
      if (newCount >= 0) {
        const updatedPrize = item.InitialPrize * newCount; // Calculate the updated prize
        await updateItemCount(itemId, newCount, updatedPrize);
      } else {
        alertMessage();
      }
    }
  };

  const incrementCount = async (itemId) => {
    const item = cartItems.find(item => item._id === itemId);
    if (item) {
      const newCount = item.Count + 1;
      const updatedPrize = item.InitialPrize + item.Prize * newCount; // Calculate the updated prize
      await updateItemCount(itemId, newCount, updatedPrize);
    }
  };


  const deleteCart = async (cartItemId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/cart/${cartItemId}`)
      console.log('Succcessfully deleted :', response.data);
      setCartItems((prevCartItems) => prevCartItems.filter(item => item._id !== cartItemId))
    } catch (error) {
      console.log('Error on Deleting Cart Item :', error);
    }
  }


  const calculateTotalPrize = async () => {
    let totalPrize = 0;
    cartItems.forEach(item => {
      totalPrize += item.InitialPrize * item.Count
    });
    setTotalPrize(totalPrize)
  }


  useEffect(() => {
    const token = localStorage.getItem("userInfooooo")
    if (token) {
      const decodedToken = jwt_decode(token)
      const userId = decodedToken.id
      console.log("decodedToken.id:::::", decodedToken.id)
      setUserId(userId)

    }
  }, [])

  const toggelShippingAddressForm = () => {
    setShowShippingAddressForm(!showShippingAddressForm)
  }


  const navigate = useNavigate()

  // const userOrder = async () => {
  //   console.log('userOrder:::',UserId,cartItems,totalPrize,shippingAddress);
  //   try {
      
      

  //     const response = await axios.post('http://localhost:5000/userOrderr',{UserId,cartItems,totalPrize,shippingAddress:{...shippingAddress}} );
  //     console.log('zzzzzzzzzz:::',response.data);
  //     console.log('cccccccart::',response.data.items.map((obj)=> obj.product));

  //     if (response.data) {
  //       const deleteCartItemsAftrSuccssOrder = response.data.items.map((obj)=> obj._id)
  //       // let product = response.data.items.find((value)=>value.product)
  //       // console.log('proooduct:::',response.data.items.find((value)=>value.product));
  //       // Delete cart items one by one using the deleteCart function
  //       for(let _id of deleteCartItemsAftrSuccssOrder){
  //         // await deleteCart(product)
  //         await axios.delete(`http://localhost:5000/cart/${_id}`);
  //       }
        
        
  //       // setCartItems([]);
  //       navigate('/placeOrderSuccess');
  //     }
      
  //   } catch (error) {
  //     console.log('Error on Ordering Products.....', error);
  //     // console.log('Response Data:', error.response.data); // Log response data if available
      
  //   }
  // };



  const userOrder = async () => {
    console.log('userOrder:::', UserId, cartItems, totalPrize, shippingAddress);
    try {


      // const orderData = {
      //   userId: UserId,
      //   items: cartItems,
      //   total: totalPrize,
      //   shippingAddress: {...shippingAddress},
      //   paymentStatus: 'pending',
      //   orderDate: new Date().toISOString()
      // };

      // const orderData = {
      //   userId: UserId,
      //   items: cartItems,
      //   total: totalPrize,
      //   shippingAddress: {
      //     address: shippingAddress.address,
      //     city: shippingAddress.city,
      //     mobile: shippingAddress.mobile,
      //   },
      //   paymentStatus: 'pending',
      //   orderDate: new Date().toISOString()
      // };

      const response = await axios.post('http://localhost:5000/userOrderr', {
        UserId,
        cartItems,
        totalPrize,
        shippingAddress: { ...shippingAddress }
      });
      console.log('Response after ordering:', response.data);
  
      if (response.data) {
        const deleteCartItemsAftrSuccssOrder = response.data.items.map((obj) => obj._id);
        console.log('Delete cart items:', deleteCartItemsAftrSuccssOrder);
  
        for (let _id of deleteCartItemsAftrSuccssOrder) {
          console.log('Deleting cart item with _id:', _id);
          await axios.delete(`http://localhost:5000/cart/${_id}`);
          setCartItems((prevCartItems)=> prevCartItems.filter(item => item._id !== _id))
          console.log('Deleted cart item with _id:', _id);
        }
  
        console.log('Cart items deleted');
        navigate('/placeOrderSuccess');
      }
    } catch (error) {
      console.log('Error on Ordering Products:', error);
    }
  };
  




  return (
    <div className='container'>
      {/* <ShippingAddressForm  shippingAddress={shippingAddress} onShippingAddressChange={setShippingAddress}  /> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>{item.Name}</td>
              <td>
                <BiRupee size={16} />
                {item.Prize}
              </td>
              <td>
                <button className='btn btn-primary' onClick={() => decrementCount(item._id)}>
                  -
                </button>
                {item.Count}
                <button className='btn btn-primary' onClick={() => incrementCount(item._id)}>
                  +
                </button>
              </td>
              <td>
                <BiRupee size={16} />
                {item.InitialPrize * item.Count}
              </td>
              <td>
                <IoTrashBin onClick={() => deleteCart(item._id)} className='delete-icon' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='totalPrize' style={{ display: 'flex' }}>
        <h3>
          Total Price: <BiRupee size={24} />
          {totalPrize}
        </h3>
        {/* <button onClick={userOrder} className='orderBtn btn btn-success '>Order Now</button> */}
        <button onClick={toggelShippingAddressForm} className='orderBtn btn btn-success '>Order Now</button>
        {showShippingAddressForm && (
          <ShippingAddressForm  shippingAddress={shippingAddress} onShippingAddressChange={setShippingAddress} onSubmit={userOrder} />
        )}
      </div>
    </div>
  );
};

export default ViewCart;
























































// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './ViewCart.css';
// import { BiRupee } from 'react-icons/bi';
// import { IoTrashBin } from 'react-icons/io5';

// const ViewCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const { bookId } = useParams();

//   useEffect(() => {
//     viewBook();
//   }, []);

//   const viewBook = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/cart`);
//       setCartItems(response.data);
//     } catch (error) {
//       console.log('Error fetching book:', error);
//     }
//   }

//   const updateItemCount = async (itemId, newCount) => {
//     try {
//       // Calculate the updated prize based on the new count
//       const item = cartItems.find(item => item._id === itemId);
//       if (item) {
//         const initialPrize = item.Prize; 
//         // const updatedPrize = initialPrize + initialPrize;
//         const updatedPrize = initialPrize * newCount;
//         await axios.put(`http://localhost:5000/cartCountUpdate/${itemId}`, { Count: newCount, Prize: updatedPrize });
//         // new count and updated Prize vech cartItems array  ne update cheyyan
//         setCartItems(prevCartItems =>
//           prevCartItems.map(item => (item._id === itemId ? { ...item, Count: newCount, Prize: updatedPrize } : item))
//         );
//       }
//     } catch (error) {
//       console.log('Error updating item count:', error);
//     }
//   };


//   const decrementCount = async (itemId) => {
//     const item = cartItems.find(item => item._id === itemId);
//     if (item) {
//       const newCount = item.Count - 1;
//       if (newCount >= 0) {
//         await updateItemCount(itemId, newCount);
//       } else {
//         alert("Count cannot be less than one");
//       }
//     }
//   };

//   const incrementCount = async (itemId) => {
//     const item = cartItems.find(item => item._id === itemId);
//     if (item) {
//       const newCount = item.Count + 1;
//       await updateItemCount(itemId, newCount);
//     }
//   };


// const deleteCart = async (cartItemId) => {
//   try {
//     const response = await axios.delete(`http://localhost:5000/cart/${cartItemId}`)
//     console.log('Succcessfully deleted :',response.data);
//     setCartItems((prevCartItems) => prevCartItems.filter(item => item._id ==! cartItemId))
//   } catch (error) {
//       console.log('Error on Deleting Cart Item :',error);
//   }

// }

//   return (
//     <div className='container'>
//       {cartItems.map((item) => (
//         <div key={item._id}>
//           <h1>Name: {item.Name}</h1>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <BiRupee size={24} />
//             <h3>{item.Prize}</h3>
//             <div style={{ display: 'flex', alignItems: 'center', marginLeft: '32%', marginTop: '0px' }}>
//               <button className='btn btn-primary' onClick={() => decrementCount(item._id)}>
//                 -
//               </button>
//               <h3>{item.Count}</h3>
//               <button className='btn btn-primary' onClick={() => incrementCount(item._id)}>
//                 +
//               </button>

//               <IoTrashBin onClick={() => deleteCart(item._id)} className='delete-icon'/>

//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ViewCart;












