

import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import './ViewCart.css';
import { BiRupee } from 'react-icons/bi';
import { IoTrashBin } from 'react-icons/io5';
import { Table, Button } from 'react-bootstrap'; // Import Button from react-bootstrap
import jwt_decode from 'jwt-decode';
import { newContext } from './Contexts/ViewCartContext';
import ShippingAddressForm from './ShippingAddressForm';
import { useNavigate } from 'react-router-dom';

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrize, setTotalPrize] = useState(0);
  const [UserId, setUserId] = useState(null);
  const { shippingAddress, setShippingAddress } = useContext(newContext);
  const [showShippingAddressForm, setShowShippingAddressForm] = useState(false);

  useEffect(() => {
    viewBook();
  }, []);

  useEffect(() => {
    calculateTotalPrize();
  }, [cartItems]);

  useEffect(() => {
    const token = localStorage.getItem('userInfooooo');
    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.id;
      console.log('decodedToken.id:::::', decodedToken.id);
      setUserId(userId);
    }
  }, []);

  const viewBook = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cart`);
      setCartItems(response.data);
    } catch (error) {
      console.log('Error fetching book:', error);
    }
  };

  const calculateTotalPrize = async () => {
    let totalPrize = 0;
    cartItems.forEach((item) => {
      totalPrize += item.InitialPrize * item.Count;
    });
    setTotalPrize(totalPrize);
  };

  const decrementCount = async (itemId) => {
    const item = cartItems.find((item) => item._id === itemId);
    if (item) {
      const newCount = item.Count - 1;
      if (newCount >= 0) {
        const updatedPrize = item.InitialPrize * newCount;
        await updateItemCount(itemId, newCount, updatedPrize);
      } else {
        alertMessage();
      }
    }
  };

  const incrementCount = async (itemId) => {
    const item = cartItems.find((item) => item._id === itemId);
    if (item) {
      const newCount = item.Count + 1;
      const updatedPrize = item.InitialPrize * newCount;
      await updateItemCount(itemId, newCount, updatedPrize);
    }
  };

  const updateItemCount = async (itemId, newCount, updatedPrize) => {
    try {
      const response = await axios.put(`http://localhost:5000/cartCountUpdate/${itemId}`, {
        Count: newCount,
        Prize: updatedPrize,
      });
      if (response.status === 200) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) => (item._id === itemId ? { ...item, Count: newCount, Prize: updatedPrize } : item))
        );
      }
    } catch (error) {
      console.log('Error updating item count:', error);
    }
  };

  const deleteCart = async (cartItemId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/cart/${cartItemId}`);
      console.log('Successfully deleted:', response.data);
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item._id !== cartItemId));
    } catch (error) {
      console.log('Error on Deleting Cart Item:', error);
    }
  };

  const alertMessage = () => {
    alert("Count cannot be less than one");
  };

  const toggelShippingAddressForm = () => {
    setShowShippingAddressForm(!showShippingAddressForm);
  };

  const navigate = useNavigate();

  const userOrder = async () => {
    console.log('userOrder:::', UserId, cartItems, totalPrize, shippingAddress);
    try {
      const response = await axios.post('http://localhost:5000/userOrderr', {
        UserId,
        cartItems,
        totalPrize,
        shippingAddress: { ...shippingAddress },
      });
      console.log('Response after ordering:', response.data);

      if (response.data) {
        const deleteCartItemsAftrSuccssOrder = response.data.items.map((obj) => obj._id);
        console.log('Delete cart items:', deleteCartItemsAftrSuccssOrder);

        for (let _id of deleteCartItemsAftrSuccssOrder) {
          console.log('Deleting cart item with _id:', _id);
          await axios.delete(`http://localhost:5000/cart/${_id}`);
          setCartItems((prevCartItems) => prevCartItems.filter((item) => item._id !== _id));
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
      <Table striped bordered hover responsive>
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
                <Button variant='primary' onClick={() => decrementCount(item._id)}>
                  -
                </Button>
                {item.Count}
                <Button variant='primary' onClick={() => incrementCount(item._id)}>
                  +
                </Button>
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
      <div className='totalPrize'>
        <h3>
          Total Price: <BiRupee size={24} />
          {totalPrize}
        </h3>
        <Button onClick={toggelShippingAddressForm} variant='success'>
          Order Now
        </Button>
        {showShippingAddressForm && (
          <ShippingAddressForm
            shippingAddress={shippingAddress}
            onShippingAddressChange={setShippingAddress}
            onSubmit={userOrder}
          />
        )}
      </div>
    </div>
  );
};

export default ViewCart;
