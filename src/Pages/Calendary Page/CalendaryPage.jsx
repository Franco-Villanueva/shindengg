import React, { useEffect } from 'react';
import Calendary from '../../Components/Calendary/Calendary';

const CalendaryPage = () => {
    
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    return ( 
        <section className="relative">
            <div 
                className="absolute h-auto inset-0 bg-cover bg-center object-contain blur-sm opacity-40"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/df21bcvs0/image/upload/v1726845984/Fondos%20shindengg/hxvzrg4pduildibf0snk.webp)`,
                    filter: 'blur(10px)'  
                }}
            ></div>
            
            {/* Capa superpuesta para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 opacity-75"></div>

            <div className="relative w-full h-full">
            <Calendary />    
            </div>
            
                

        </section>
    );
}

export default CalendaryPage;
