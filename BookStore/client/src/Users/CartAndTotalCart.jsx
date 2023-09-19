import React from 'react'
import ViewCart from './ViewCart'
import TotalPrizeCart from './TotalPrizeCart'
import './CartAndTotalCart.css'

const CartAndTotalCart = () => {
  return (
    <div className='cartHome'>
      <div className="cartSide">
        <ViewCart/>
      </div>
      <div className="cartTotalSide">
        <TotalPrizeCart/>
      </div>
    </div>
  )
}

export default CartAndTotalCart
