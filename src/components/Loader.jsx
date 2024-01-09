// Loader.js
import React from 'react';

import { Audio,Puff,BallTriangle} from 'react-loader-spinner';
const Loader = () => {
  return (
        
    // <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
    //         <BallTriangle height="80"  width="80" color='#4DCAF9'/>
    // </div>

   
    <BallTriangle height="80"  width="80" color='#4DCAF9'/>

  );
};

export default Loader;
