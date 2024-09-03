import React, { useEffect } from 'react';
import Background from '../../assets/fondo2.jpeg';

const TeamsPage = () => {
    
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    return ( 
        <div className="relative w-full min-h-screen flex justify-center items-center py-44">
            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: '100% auto',  // Ajuste del tamaño para cubrir el ancho y repetir verticalmente
                    backgroundRepeat: 'repeat-y',  
                    
                }}
            ></div>
            
            {/* Capa superpuesta para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Contenido principal */}
            <div className="relative">
                <h1>TEAMS PAGE</h1>
            </div>
        </div>
    );
}

export default TeamsPage;
