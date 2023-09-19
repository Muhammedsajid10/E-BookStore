import React, { createContext, useState } from 'react'

const newContext = createContext()
const ViewCartContext = ({children}) => {
    const [shippingAddress, setShippingAddress] = useState({
        address:'',
        city:'',
        mobile:''
    })
  return (
    <div>
      <newContext.Provider value={{shippingAddress,setShippingAddress}}>
        {children}
      </newContext.Provider>
    </div>
  )
}

export default ViewCartContext
export {newContext}
