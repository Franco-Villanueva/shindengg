import React, { useEffect } from 'react';
import News from "../../Components/News/News";
import Background from '../../assets/backgroundNews2.jpg';

const NewsPage = () => {
    
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    return ( 
        <section className=" relative w-full min-h-screen flex">
            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: '100% auto',  // Ajuste del tamaño para cubrir el ancho y repetir verticalmente
                    backgroundRepeat: 'repeat-y',  
                    filter: 'blur(25px)'
                }}
            ></div>
            
            {/* Capa superpuesta para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Contenido principal */}

                <News showLoadMoreButton={true} />

                

        </section>
    );
}

export default NewsPage;
