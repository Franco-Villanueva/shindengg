import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NewsPage from './Pages/News Page/NewsPage';
import Navbar from './Components/NavBar/Navbar';
import TeamsPage from './Pages/Teams Page/TeamsPage';
import MainPage from './Pages/Main Page/MainPage';

const App = () => {
  const location = useLocation(); // Obtén la ubicación actual para detectar cambios de ruta

  return (
    <>
    <div style={{ overflowX: 'hidden' }}> 
      <Navbar />
      <AnimatePresence mode="wait"> {/* Cambiar exitBeforeEnter a mode="wait" */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><MainPage /></PageTransition>} />
          <Route path="/teams/*" element={<PageTransition><TeamsPage /></PageTransition>} />
          <Route path="/news" element={<PageTransition><NewsPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
    </>
    
  );
};

// Componente de transición de página que usa Framer Motion
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }} // Comienza con la opacidad en 0 y se desplaza a la izquierda
    animate={{ opacity: 1, x: 0 }} // Termina con la opacidad en 1 y sin desplazamiento
    exit={{ opacity: 0, x: 50 }} // Desvanece y desplaza a la derecha al salir
    transition={{ duration: 0.5 }} // Duración de la animación
  >
    {children}
  </motion.div>
);

export default App;
