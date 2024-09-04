import React, { useEffect } from 'react';
import Background from '../../assets/fondo2.jpeg';
import Teams from '../../Components/Teams/Teams';

const TeamsPage = () => {
    
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    return ( 
        <div className="relative w-full min-h-screen flex justify-center items-center">
            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: '100% auto',  
                    backgroundRepeat: 'repeat-y',  
                }}
            ></div>
            
            {/* Capa superpuesta para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Contenido principal */}
            <div className="relative w-full h-screen">
                <Teams />
            </div>
        </div>
    );
}

export default TeamsPage;
