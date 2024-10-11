import React from 'react';
import './stylesFooter.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faXTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <div className="footer-background"> {/* Contenedor con imagen de fondo */}

      <footer className="blurf rounded-3xl py-6 mx-3 md:mx-14 lg:mx-14 2xl:mx-52 ">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">

          {/* Sección superior con logo, navegación y contacto */}
          <div className="flex flex-col md:flex-row justify-between items-start">

            {/* Logo de Shindengg */}
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <img src='https://res.cloudinary.com/df21bcvs0/image/upload/v1726685923/Logos%20shindengg/bblm7jirpdjeojwzmd8z.webp' alt="Shindengg Logo" className="h-24 w-24" />
            </div>

            {/* Navegación y Contacto en columnas, en la parte superior derecha */}
            <div className="flex flex-col md:flex-row md:ml-auto space-y-8 md:space-y-0 md:space-x-12">

              {/* Navegación en columna */}
              <nav className="flex flex-col space-y-2" aria-label="Navegación principal">
                <h2 className="font-oswald text-[#f9b6f9] text-xl">NAVEGACIÓN</h2>
                <ul className="flex flex-col space-y-2">
                  <Link to={'/'} className="text-white hover:text-[#f9b6f9]" onClick={() =>window.scrollTo({ top: 0, behavior: 'smooth'})}>Inicio</Link>
                  <li><Link to={'/calendary'} className="text-white hover:text-[#f9b6f9]">Calendario</Link></li>
                  <li><Link to={'/shop'} className="text-white hover:text-[#f9b6f9]">Shop</Link></li>
                  <li><Link to={'/teams'} className="text-white hover:text-[#f9b6f9]">Teams</Link></li>
                  <li><Link to={'/news'} className="text-white hover:text-[#f9b6f9]">Noticias</Link></li>
                </ul>
              </nav>

              {/* Contacto en columna */}
              <address className="flex flex-col space-y-2 not-italic">
                <h2 className="font-oswald text-[#f9b6f9] text-xl">CONTACTO</h2>
                <ul>
                  <li><span className="text-white hover:text-[#f9b6f9]">Email: <a href="mailto:contacto@shindengg.com">contacto@shindengg.com</a></span></li>
                  <li><span className="text-white hover:text-[#f9b6f9]">Teléfono: <a href="tel:+1234567890">+1 (234) 567-890</a></span></li>
                  <li><span className="text-white hover:text-[#f9b6f9]">Dirección: 123 Calle Falsa, Ciudad, País</span></li>
                </ul>
              </address>

            </div>

          </div>

            {/* Separador horizontal */}
            <hr className='h-[2px] w-full border-t-0 custom-gradient p-0 my-16' />

            {/* Sección inferior con Redes Sociales y Derechos Reservados */}
            <div className="flex flex-col justify-between items-center space-y-4 md:space-y-0">

              {/* Redes Sociales */}
              <ul className='flex flex-row space-x-8 items-center mb-5'>
                <li>
                  <a href="https://discord.com/invite/ukfDYRf3Wm" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDiscord} className="text-3xl text-[#f9b6f9]" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/shindengg/" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="text-3xl text-[#f9b6f9]" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/shindengg" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} className="text-3xl text-[#f9b6f9]" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@shindengg" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} className="text-3xl text-[#f9b6f9]" />
                  </a>
                </li>
              </ul>

              {/* Derechos Reservados */}
              <div className="text-center">

                <small className="text-sm text-white">
                  &copy; {new Date().getFullYear()} Shindengg. Todos los derechos reservados.
                </small>

              </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
