import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Navbar from './Components/NavBar/Navbar';
import Teams from './Components/Teams/Teams'; // Asegúrate de crear este componente
import News from './Components/News/News'; // Asegúrate de crear este componente
import NewsPage from './Pages/News Page/NewsPage';
// import Contact from './Components/Contact/Contact'; // Asegúrate de crear este componente
// import Shop from './Components/Shop/Shop'; // Asegúrate de crear este componente

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/news" element={<NewsPage />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
