import React, { useEffect } from 'react';
import Calendary from '../../Components/Calendary/Calendary';

const CalendaryPage = () => {
    
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    return ( 
        <section className="relative flex w-full h-full min-h-screen">
            <div 
                className="absolute inset-0 object-contain h-auto bg-center bg-cover blur-sm opacity-40"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/df21bcvs0/image/upload/v1726685959/Fondos%20shindengg/ag1zaq3oxqcqplenxfgz.webp)`,
                      
                }}
            ></div>
            
            {/* Capa superpuesta para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative w-full h-full py-40 md:py-0 md:pt-40">
            <Calendary />    
            </div>
            
                

        </section>
    );
}

export default CalendaryPage;
