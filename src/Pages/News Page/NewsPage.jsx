import React, { useEffect, useState } from 'react';
import News from "../../Components/News/News";

const NewsPage = () => {
    const [news, setNews] = useState([]);

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
                if (Array.isArray(data) && data.length) {
                    setNews(data);
                }
            })
            .catch(err => {
                alert(err);
            });

        return () => setNews([]);
    }, []);

    return (
        <section className="relative flex w-full h-full min-h-screen">
            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/df21bcvs0/image/upload/v1726685959/Fondos%20shindengg/q83vdkte2gi4zm74jyas.webp)`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'repeat-y',  
                    filter: 'blur(25px)',
                }}
            ></div>
            
            {/* Capa superpuesta para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Contenedor de noticias con altura mínima */}
            <div className="relative pt-40">
                <News news={news} showLoadMoreButton={true} />
            </div>
        </section>
    );
};

export default NewsPage;
