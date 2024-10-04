import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NewsPage from './Pages/News Page/NewsPage';
import Navbar from './Components/NavBar/Navbar';
import TeamsPage from './Pages/Teams Page/TeamsPage';
import MainPage from './Pages/Main Page/MainPage';
import ShopPage from './Pages/Shop Page/ShopPage';
import CalendaryPage from './Pages/Calendary Page/CalendaryPage';

const App = () => {
  const location = useLocation(); // Obtén la ubicación actual para detectar cambios de ruta

  return (
    <>
    <div style={{ overflowX: 'hidden' }}> 
      <AnimatePresence mode="wait">
        <Navbar />
       {/* Cambiar exitBeforeEnter a mode="wait" */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><MainPage /></PageTransition>} />
          <Route path="/teams/*" element={<PageTransition><TeamsPage /></PageTransition>} />
          <Route path="/news" element={<PageTransition><NewsPage /></PageTransition>} />
          <Route path="/shop" element={<PageTransition><ShopPage /></PageTransition>} />
          <Route path="/calendary" element={<PageTransition><CalendaryPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
    </>
    
  );
};

// Componente de transición de página que usa Framer Motion
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      style={{ position: 'relative', overflow: 'hidden' }} 
    >
      {children}
      
    </motion.div>
  );
};

export default App;
