import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return ( 
        <>
            <nav className='flex flex-row items-center justify-between align-middle px-40 py-4 bg-slate-800'>
                <figure className='flex items-center'>
                    <img src={logo} alt="Logo" className='w-14 h-14' />
                </figure>
                <div className='flex flex-row justify-around'>
                    <ul className='flex flex-row space-x-8 mx-16'>
                        <li>
                            <a to="/nosotros" className='text-white hover:text-gray-900'>Nosotros</a>
                        </li>
                        <li>
                            <a to="/equipos" className='text-white hover:text-gray-900'>Equipos</a>
                        </li>
                        <li>
                            <a to="/contacto" className='text-white hover:text-gray-900'>Contacto</a>
                        </li>
                        <li>
                            <a to="/noticias" className='text-white hover:text-gray-900'>Noticias</a>
                        </li>
                    </ul>
                    <ul className='flex flex-row space-x-8'>
                        <li>
                            <a className='text-white hover:text-gray-900'>1</a>
                        </li>
                        <li>
                            <a className='text-white hover:text-gray-900'>2</a>
                        </li>
                        <li>
                            <a className='text-white hover:text-gray-900'>2</a>
                        </li>
                        <li>
                            <a className='text-white hover:text-gray-900'>3</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;
