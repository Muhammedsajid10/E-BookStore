import axios from 'axios';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const ShippingAddressForm = ({ shippingAddress,onShippingAddressChange,onSubmit }) => {
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onShippingAddressChange((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }));
        console.log('onshippingAddress::::',name);
        console.log('handleInputChange::::',shippingAddress);
    }

    
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit()

    }
  
    

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" name="address" value={shippingAddress.address} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter City" name="city" value={shippingAddress.city} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone" name="mobile" value={shippingAddress.mobile} onChange={handleInputChange} />
                </Form.Group>
                
               
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default ShippingAddressForm;
