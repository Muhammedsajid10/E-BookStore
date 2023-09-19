import React, { useEffect, useState } from 'react'
import './PlaceOrderLList.css'
import { Bars } from 'react-loader-spinner'


const PlaceOrderLList = () => {

    const [loader, setLoader] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoader(false)
      }, 4000);
    }, [])
    

  return (
    <div className='container-placeorderList'>
      <div className='row'>
        <div className="col-md-12  box ">
            {loader ? (
                <div className='loader'>
                    <Bars color='#3498db' height={40} width={40} /> 
                    <p>Loading...</p>
                </div>
            ) : (
                <h1 className='heading'>Under Maintenance 😊</h1>
            ) }
            
        </div>
      </div>
    </div>
  )
}

export default PlaceOrderLList


// import React, { useState, useEffect } from 'react';
// import './PlaceOrderLList.css';
// import 'animate.css/animate.min.css';
// import { Audio, BallTriangle, Bars, Oval } from 'react-loader-spinner'; 

// const PlaceOrderLList = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 4000);
//   }, []);

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className={`col-md-12 box animate__animated ${loading ? 'hidden' : 'animate__fadeInUp animate__delay-1s'}`}>
//           {loading ? (
//             <div className='loader'>
//               {/* <Oval color='#3498db' height={40} width={40} />  */}
//               <Bars color='#3498db' height={40} width={40} /> 
//               <p>Loading...</p>
//             </div>
//           ) : (
//             <h1 className='heading'>Under Maintenance</h1>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrderLList;
