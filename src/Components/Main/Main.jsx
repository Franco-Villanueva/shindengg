import React from 'react';
import fondo from '../../assets/fondo3.jpeg';
import logo from '../../assets/logo2.png';
import Footer from '../Footer/Footer';

const Main = () => {
    return ( 
        <>
        <main className="h-screen w-full overflow-hidden relative">
            {/* Fondo de la página */}
            <figure className="absolute inset-0 h-full w-full">
                <img src={fondo} alt="fondo shindengg" className="w-full h-full object-cover opacity-35" />
            </figure>
            
            {/* Contenido central */}
            <div className="relative flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between h-full text-white px-4 md:px-14 lg:px-24 xl:px-52">
                {/* Sección de encabezado */}
                <header className="p-4 md:ml-16 text-center md:text-left mt-16 md:mt-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 uppercase tracking-wide text-center md:text-left">
                        Shindengg
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg text-center md:text-left mb-4">
                        Somos un equipo de eSports apasionado y dedicado, comprometido a llevar la competición al siguiente nivel. En Shindengg, creemos en la excelencia, el trabajo en equipo y la perseverancia. Únete a nosotros en nuestra aventura para dominar la escena de los eSports.
                    </p>
                    {/* Botón de llamada a la acción */}
                    <button className="bg-[#f9b6f9] hover:bg-rose-300 text-white font-bold py-2 px-4 rounded-full mt-4">
                        Ver equipos &gt;&gt;
                    </button>
                </header>
                
                {/* Logo del equipo */}
                <figure className="md:mr-16 mt-8 md:mt-0 flex justify-center">
                    <img src={logo} alt="logo shindengg" className="w-16 h-16 md:w-40 md:h-40 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-contain" />
                </figure>
            </div>
        </main>
        <Footer />
        </>
    );
}

export default Main;
