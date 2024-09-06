import React, { useEffect } from 'react';
import Main from '../../Components/Main/Main'
import Background from '../../assets/fondo3.jpeg';
import News from '../../Components/News/News';
import Footer from '../../Components/Footer/Footer';

const MainPage = () => {
    
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <section className="relative w-full h-screen flex">

            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 bg-cover bg-center w-screen h-screen opacity-35"
                style={{
                    backgroundImage: `url(${Background})`,
                }}
            ></div>

        <Main/>       
          
        </section>
        <section>
        <News />
        </section>
        <section>
        <Footer />
        </section>
        
        </>
    );
}

export default MainPage;
