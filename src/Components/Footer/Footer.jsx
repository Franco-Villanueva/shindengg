import React from 'react';
import './stylesFooter.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }

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
                          <a className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <g fill="#f9b6f9">
                                <g transform="scale(5.12,5.12)">
                                    <path d="M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047zM18.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4zM31.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4z"/>
                                </g>
                                </g>
                            </svg>
                            </a>
                          </li>
                          <li>
                              <a className=' transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center '><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0,0,256,256">
  <g fill="#f9b6f9"><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g>
  </svg></a>
                          </li>
                          <li>
                              <a className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
  <g fill="#f9b6f9"><g transform="scale(5.12,5.12)"><path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z"></path></g></g>
  </svg></a>
                          </li>
                          <li>
                              <a className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
  <g fill="#f9b6f9"><g transform="scale(5.12,5.12)"><path d="M5.3125,1l-3.3125,8.8125v33.1875h11v6h7.40625l6,-6h9l12.59375,-12.5625v-29.4375zM11,6h32v22l-6,6h-12l-6,6v-6h-8zM20,13v14h6v-14zM30,13v14h6v-14z"></path></g></g>
  </svg></a>
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
