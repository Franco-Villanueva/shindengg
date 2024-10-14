import React from 'react';
import { Link } from 'react-router-dom';


const Main = () => {
    return ( 
        <>
        <main className='items-center justify-between w-screen h-screen px-16 mx-2 2xl:mx-52 lg:mx-24 md:mx-14 sm:mx-6'>
            
            {/* Contenido central */}
            <div className="relative flex flex-col items-center justify-center h-full text-white md:flex-row md:items-center md:justify-between">
                {/* Sección de encabezado */}
                <header className="flex flex-col items-center text-center md:text-left md:items-start">
                    <img
                        src='https://res.cloudinary.com/df21bcvs0/image/upload/v1726685923/Logos%20shindengg/mhiu9fcdpc8aqbvgwsxt.png'   // Reemplaza con la ruta de tu imagen 
                        alt="Shindengg"   // Texto alternativo para accesibilidad 
                        className="w-64 md:w-72 lg:w-80 xl:w-[600px] h-auto"
                    />
                    <p className="max-w-xs mb-4 text-sm text-center md:text-base lg:text-lg md:max-w-sm lg:max-w-md xl:max-w-lg md:text-left">
                        Somos un equipo de eSports apasionado y dedicado, comprometido a llevar la competición al siguiente nivel. En Shindengg, creemos en la excelencia, el trabajo en equipo y la perseverancia. Únete a nosotros en nuestra aventura para dominar la escena de los eSports.
                    </p>
                    {/* Botón de llamada a la acción */}
                    <Link to={'/teams'} className="bg-[#f9b6f9] hover:bg-rose-300 text-white font-bold py-2 px-4 rounded-full mt-4">
                        Ver equipos &gt;&gt;
                    </Link>
                </header>
                
                {/* Logo del equipo */}
                <figure className="flex justify-center mt-8 md:mt-0">
                    <img src='https://res.cloudinary.com/df21bcvs0/image/upload/v1726685923/Logos%20shindengg/jekedbtyacnawdbs052f.webp' alt="logo shindengg" className="object-contain w-16 h-16 md:w-40 md:h-40 lg:w-64 lg:h-64 xl:w-96 xl:h-96" />
                </figure>
            </div>

        </main>
        </>
    );
}

export default Main;
