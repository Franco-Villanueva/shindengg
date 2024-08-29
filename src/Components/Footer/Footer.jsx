import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">

      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">

          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Navegación</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
              <li><a href="#" className="hover:text-gray-400">Acerca de</a></li>
              <li><a href="#" className="hover:text-gray-400">Servicios</a></li>
              <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
            </ul>
          </div>


          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Contacto</h2>
            <ul className="space-y-2">
              <li><span className="hover:text-gray-400">Email: contacto@shindengg.com</span></li>
              <li><span className="hover:text-gray-400">Teléfono: +1 (234) 567-890</span></li>
              <li><span className="hover:text-gray-400">Dirección: 123 Calle Falsa, Ciudad, País</span></li>
            </ul>
          </div>


          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Síguenos</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f">Facebook</i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter">Twitter</i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram">Instagram</i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin">LinkedIn</i>
              </a>
            </div>
          </div>
        </div>


        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Shindengg. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
