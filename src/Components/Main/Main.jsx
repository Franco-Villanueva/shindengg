import React from 'react';
import '../../index.css'; 
import fondo from '../../assets/fondo3.jpeg'

const Main = () => {
    return ( 
        <>
         <div className='h-screen w-screen overflow-hidden'>
            <figure className='flex items-center justify-center h-screen w-screen'>
                <img src={fondo} alt="fondo" className='w-screen h-screen object-cover' />
             </figure>
         </div>
        </>
     );
}
 
export default Main;