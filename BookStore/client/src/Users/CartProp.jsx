// import axios from 'axios';
// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom';
// import Home from './Home';
// import ViewCart from './ViewCart';

// const CartProp = () => {
    
//     const [cartItems, setCartItems] = useState([]);
//     const { bookId } = useParams()

//     const addToCart = async () => {
//         try {
//             // Fetch the book details from the server based on the bookId
//             const response = await axios.get(`http://localhost:5000/idPassBook/${bookId}`);

//             // Get the book details from the response
//             const { Name, Prize } = response.data;

//             // Send the cart item data to the server
//             const cartResponse = await axios.post('http://localhost:5000/cart', { bookId, Name, Prize });
//             console.log('Added to cart:', cartResponse.data);
//             // Update the cart items in the state
//             setCartItems((prevCartItems) => [...prevCartItems, { bookId, Name, Prize }]);
//         } catch (error) {
//             console.log('Error adding to cart:', error);
//         }
//     };


//     return (
//         <div>
//             <Home addToCart={addToCart} />
//             <ViewCart addToCart={addToCart} cartItems={cartItems} />
//         </div>
//     )
// }

// export default CartProp

















import React from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';
import axios from 'axios';

const CartProp = () => {
    const { bookId } = useParams();
    const addToCart = async (bookId, Name, Prize) => {
        try {
            const response = await axios.get(`http://localhost:5000/idPassBook/${bookId}`);
            const { Name, Prize } = response.data;
            const cartResponse = await axios.post('http://localhost:5000/cart', { bookId, Name, Prize });
            console.log('Added to cart:', cartResponse.data);
        } catch (error) {
            console.log('Error adding to cart:', error);
        }
    };

    return (
        <div>
            <Home addToCart={addToCart} />
        </div>
    );
};

export default CartProp;

