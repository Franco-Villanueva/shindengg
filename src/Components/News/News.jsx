import React, { useState, useEffect } from 'react';
import news from './json';

const News = ({ showLoadMoreButton }) => { 
    // Estado para almacenar todas las noticias
    const [columns, setColumns] = useState('grid-cols-1'); // Por defecto, 1 columna para móviles
    const [visibleNews, setVisibleNews] = useState(2); // Por defecto, 2 noticias visibles para móviles

    // const fetchNews = async () => {
    //     try {
    //         const response = await fetch('https://api.example.com/news');
    //         const data = await response.json();
    //         setNews(data); // Guardar las noticias en el estado
    //     } catch (error) {
    //         console.error('Error al obtener las noticias:', error);
    //     }
    // };

    const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setColumns('grid-cols-3'); // 3 columnas para escritorio
            setVisibleNews(6); // Mostrar 6 noticias en PC
        } else if (width >= 768) {
            setColumns('grid-cols-2'); // 2 columnas para tabletas
            setVisibleNews(4); // Mostrar 4 noticias en tabletas
        } else {
            setColumns('grid-cols-1'); // 1 columna para móviles
            setVisibleNews(2); // Mostrar 2 noticias en móviles
        }
    };

    useEffect(() => {
        // fetchNews(); // Llamar a la función para obtener las noticias
        window.addEventListener('resize', handleResize);
        handleResize(); // Llamar a la función inicialmente para configurar las columnas y noticias visibles
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const loadMoreNews = () => {
        setVisibleNews(prevVisibleNews => prevVisibleNews + 2); // Incrementa el número de noticias visibles en 2
    };

    return (
        <section className="relative px-4 md:px-14 lg:px-24 xl:px-52 py-10 bg-transparent bg-opacity-90">
            <h2 className="mx-16 text-2xl font-bold text-[#f9b6f9] mb-6">Noticias</h2>
            <div className={`mx-16 grid ${columns} gap-6`}>
                {news?.slice(0, visibleNews).map((item) => (
                    <div key={item.id} className="relative h-48 md:h-64 bg-[#f9b6f9ce] rounded-lg flex flex-col items-center justify-center text-center transform transition-transform duration-[1000ms] hover:scale-105">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-3xl opacity-25" />
                        <h3 className="absolute text-white font-bold">{item.title}</h3>
                        {/* <p className="text-gray-700">{item.info}</p> */}
                    </div>
                ))}
            </div>
            {/* Mostrar el botón solo si `showLoadMoreButton` es verdadero y hay más noticias para mostrar */}
            {showLoadMoreButton && visibleNews < news.length && (
                <div className="flex justify-center mt-6">
                    <button onClick={loadMoreNews} className="bg-[#f9b6f9] hover:bg-rose-300 text-white font-bold py-2 px-4 rounded-full">
                        Cargar más
                    </button>
                </div>
            )}
            {/* Mostrar mensaje solo si no hay más noticias para cargar */}
            {showLoadMoreButton && visibleNews >= news.length && (
                <span className="text-white mt-6 block text-center">No hay más noticias</span>
            )}
        </section>
    );
};

export default News;
