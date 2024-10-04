import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importa motion de Framer Motion

const News = ({ news , showLoadMoreButton }) => {
    const [columns, setColumns] = useState('grid-cols-1');
    const [visibleNews, setVisibleNews] = useState(2);

    const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setColumns('grid-cols-3');
            setVisibleNews(6);
        } else if (width >= 768) {
            setColumns('grid-cols-2');
            setVisibleNews(4);
        } else {
            setColumns('grid-cols-1');
            setVisibleNews(2);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const loadMoreNews = () => {
        setVisibleNews(prevVisibleNews => prevVisibleNews + 2);
    };

    // Definir las variantes de animación para el efecto de expansión circular
    const newsVariants = {
        hidden: { scale: 0, opacity: 0 }, // Inicia con escala 0 (totalmente reducido) y opacidad 0
        visible: { scale: 1, opacity: 1 } // Expande a escala 1 (tamaño completo) y opacidad 1
    };

    return (
        <section className="relative flex flex-col w-full justify-center pt-36 pb-5 px-16 mx-2 2xl:mx-52 lg:mx-14 md:mx-28 sm:mx-6">
            <h2 className="font-oswald text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#f9b6f9] mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                NOTICIAS
            </h2>
            <div className={`grid ${columns} gap-6`}>
                {news?.slice(0, visibleNews).map((item) => (
                    <motion.div
                        key={item.id}
                        className="relative h-48 md:h-64 bg-[#f9b6f9ce] rounded-3xl flex flex-col items-center justify-center text-center overflow-hidden cursor-pointer"
                        initial="hidden" // Estado inicial de la animación
                        animate="visible" // Estado final de la animación
                        variants={newsVariants} // Variantes de animación definidas
                        transition={{ duration: 0.5, ease: "easeOut" }} // Duración y tipo de transición
                    >
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-3xl opacity-25" />
                        <h3 className="absolute text-white font-bold">{item.title}</h3>
                    </motion.div>
                ))}
            </div>
            {showLoadMoreButton && visibleNews < news.length && (
                <div className="flex justify-center mt-6">
                    <button onClick={loadMoreNews} className="bg-[#f9b6f9] hover:bg-rose-300 text-white font-bold py-2 px-4 rounded-full">
                        Cargar más
                    </button>
                </div>
            )}
            {showLoadMoreButton && visibleNews >= news.length && (
                <span className="font-oswald text-center text-2xl font-bold text-[#f9b6f9] pt-5">No hay más noticias</span>
            )}
        </section>
    );
};

export default News;
