import React from 'react';
import fondo from '../../assets/fondo3.jpeg'
import logo from '../../assets/logo2.png'

const Main = () => {
    return ( 
        <>
            <main className='h-screen w-screen overflow-hidden relative'>
                {/* Fondo de la página */}
                <figure className='absolute top-0 left-0 h-full w-full'>
                    <img src={fondo} alt="fondo shindengg" className='w-full h-full object-cover opacity-60' />
                </figure>
                
                {/* Contenido central */}
                <div className='relative flex-wrap flex flex-row items-center justify-between h-full text-center text-white pc:mx-52 desktop:mx-24 tablet:mx-14'>
                    {/* Sección de encabezado */}
                    <header className='bg-red-500 ml-16'>
                        <h1 className='text-5xl font-bold mb-4 uppercase tracking-wide'>Shindengg</h1>
                        <p className='text-lg max-w-72 text-left'>Somos un equipo de eSports apasionado y dedicado, comprometido a llevar la competición al siguiente nivel. En Shindengg, creemos en la excelencia, el trabajo en equipo y la perseverancia. Únete a nosotros en nuestra aventura para dominar la escena de los eSports.</p>
                    </header>
                    
                    {/* Logo del equipo */}
                    <figure className='bg-red-500 mr-16'>
                        <img src={logo} alt="logo shindengg" className='w-96 h-96 ' />
                    </figure>
                </div>
            </main>
        </>
     );
}
 
export default Main;