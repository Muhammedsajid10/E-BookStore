import React from 'react';
import './PlaceOrderSuccess.css'; 

const PlaceOrderSuccess = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 border border-warning success-box">
          <h1 className="success-text">Order Placed Successfully</h1>
        </div>
        <div className="col-md-12 text-center mt-4">
          <a href="/place-order-list" className="btn btn-primary">
            List your Orders
            
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default PlaceOrderSuccess;
