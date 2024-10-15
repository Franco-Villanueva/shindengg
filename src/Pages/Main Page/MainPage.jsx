import React, { useEffect, useState } from 'react';
import Main from '../../Components/Main/Main'
import News from '../../Components/News/News';
import Footer from '../../Components/Footer/Footer';
import Discord from '../../Components/Discord/Discord';
import LastVideos from '../../Components/LastVideos/LastVideos';

const MainPage = () => {

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

        return () => setNews([]);

    }, []);

    return (
        <>
        <section className="relative flex w-full h-screen">

            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 w-screen h-screen bg-center bg-cover opacity-35"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, #1b1a1b 100%), url(https://res.cloudinary.com/df21bcvs0/image/upload/v1726685959/Fondos%20shindengg/ahiwkqityp5iwgdknryw.jpg)`,
                }}
            ></div>

        <Main/>       
          
        </section>
        
        <section className='relative flex w-full min-h-screen' >
            <News news={news} />
        </section>

        <section >
            <LastVideos />
        </section>

        <section>
            <Discord />
        </section>

        <section>
            <Footer />
        </section>
        
        </>
    );
}

export default MainPage;
