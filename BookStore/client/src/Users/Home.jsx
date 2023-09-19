import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoCartOutline } from 'react-icons/io5';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { BiRupee } from 'react-icons/bi';
import UserNavb from './UserNavb';
import Banner from './Banner';

const Home = () => {
    // const addToCart = props.addToCart
    const [books, setBooks] = useState([]);

    // Fetch books from the server when the component mounts
    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/books');
            setBooks(response.data);
        } catch (error) {
            console.log('Error fetching books:', error);
        }
    };
///////////////////////////////////////////////////////////////////////////////////////////////////
    // const addToCart = async (bookId, Name, Prize) => {
    //     try {
    //         const response = await axios.post('http://localhost:5000/cart',{bookId})
    //         console.log('Added to cart :',response.data);
    //     } catch (error) {
    //         console.log('Error adding to cart:', error);
    //     }
        
    // }

    const addToCart = async (bookId) => {
        try {
          // Fetch the book details from the server based on the bookId
          const response = await axios.get(`http://localhost:5000/idPassBook/${bookId}`);
      
          // Get the book details from the response
          const { Name, Prize } = response.data;
      
          // Send the cart item data to the server
          const cartResponse = await axios.post('http://localhost:5000/cart', { bookId, Name, Prize, InitialPrize: Prize });
          console.log('Added to cart:', cartResponse.data);
        } catch (error) {
          console.log('Error adding to cart:', error);
        }

        
      };
     

    const navigate = useNavigate();
        const cartView = async (bookId) => {
        await addToCart(bookId)   // Wait for the cart item to be added
        navigate(`/cartView/${bookId}`);
       
        // navigate([`/cartView/${bookId}`, `/cartProp/${bookId}`]);
    };

    return (
        <div>
            <UserNavb/>
            <Banner/>
            <div className='card-container'>
            {books.map((obj) => (
                <Card key={obj._id} className='card' style={{ width: '18rem' }}>
                    <Card.Body>

                        <Card.Title>{obj.Name}</Card.Title>
                        <Card.Text>{obj.Author}</Card.Text>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <BiRupee size={24} />
                            <Card.Text>{obj.Prize}</Card.Text>
                        </div>
                        <Button>
                            {/*Add to Cart Button */}
                            <IoCartOutline size={24} onClick={()=>cartView(obj._id)} />
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
        </div>
        
    );
};

export default Home;



