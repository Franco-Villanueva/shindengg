import React, { useEffect } from 'react';
import Shop from '../../Components/Shop/Shop';

const ShopPage = () => {
    
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    return ( 
        <section className="relative flex w-full min-h-screen ">
            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/df21bcvs0/image/upload/v1726685959/Fondos%20shindengg/q83vdkte2gi4zm74jyas.webp)`,
                    backgroundSize: '100% auto',  // Ajuste del tamaño para cubrir el ancho y repetir verticalmente
                    backgroundRepeat: 'repeat-y',  
                    filter: 'blur(25px)'
                }}
            ></div>
            
            <div className="absolute inset-0 bg-black opacity-75"></div>


        <div className="relative w-full h-full">
            <Shop />    
        </div>     
        

                

        </section>
    );
}

export default ShopPage;
