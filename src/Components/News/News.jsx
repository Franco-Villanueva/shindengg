import React, { useState, useEffect } from 'react';
import news from './json'; // Asegúrate de que la ruta sea correcta para tu archivo JSON

const News = () => {
    // Estado para almacenar el número de columnas y noticias visibles
    const [columns, setColumns] = useState('grid-cols-1'); // Por defecto, 1 columna para móviles
    const [visibleNews, setVisibleNews] = useState(2); // Por defecto, 2 noticias para móviles

    // Función para manejar el cambio de tamaño de la ventana
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

    // Usar el efecto para añadir el event listener y limpiarlo
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Llamar a la función inicialmente para configurar las columnas y noticias visibles
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative px-4 md:px-14 lg:px-24 xl:px-52 py-10 bg-transparent bg-opacity-90">
            <h2 className="mx-16 text-2xl font-bold text-[#f9b6f9] mb-6">Noticias</h2>
            <div className={`mx-16 grid ${columns} gap-6`}>
                {/* Mosaico de noticias */}
                {news?.slice(0, visibleNews).map((item) => (
                    <div key={item.id} className=" relative h-48 md:h-64 bg-[#f9b6f9ce] rounded-lg flex flex-col items-center justify-center text-center">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-3xl opacity-35" />
                        <h3 className="absolute text-lg font-semibold mt-2">{item.title}</h3>
                        {/* <p className="text-gray-700 mt-1">{item.info}</p> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default News;
