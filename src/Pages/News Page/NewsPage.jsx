import React, { useEffect, useState } from 'react';
import News from "../../Components/News/News";

const NewsPage = () => {
    const [news, setNews] = useState([]); // Inicializamos como array vacío

    useEffect(() => {
        window.scrollTo(0, 0);

        fetch(`http://localhost:3001/api/news`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.length) {
                    setNews(data); // Solo si data es un array y tiene elementos
                }
            })
            .catch(err => {
                alert(err);
            });

        return () => setNews([]); // Limpiar estado al desmontar el componente
    }, []);

    return ( 
        <section className="relative flex w-full min-h-screen">
            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/df21bcvs0/image/upload/v1726685959/Fondos%20shindengg/q83vdkte2gi4zm74jyas.webp)`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'repeat-y',  
                    filter: 'blur(25px)'
                }}
            ></div>
            
            {/* Capa superpuesta para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Contenido principal */}
            <News news={news} showLoadMoreButton={true} />
        </section>
    );
}

export default NewsPage;
