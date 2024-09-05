import React from "react";
import teams from './jsonT';
import { motion } from 'framer-motion';

const Teams = () => {

    const newsVariants = {
        hidden: { scale: 0, opacity: 0 }, // Inicia con escala 0 (totalmente reducido) y opacidad 0
        visible: { scale: 1, opacity: 1 } // Expande a escala 1 (tamaño completo) y opacidad 1
    };

    return ( 
        <>
        <section className="relative px-4 md:px-14 lg:px-24 xl:px-52">
            <h2 className="mx-16 text-2xl font-bold text-[#f9b6f9] mb-6">Noticias</h2>
            <div className="flex flex-wrap space-x-4 w-full h-full p-8 justify-center items-center">
                {teams?.map((item) => (
                    <motion.div
                        key={item.id}
                        className="h-48 w-48 bg-[#1b1a1b] rounded-lg flex flex-col items-center justify-center text-center overflow-hidden cursor-pointer"
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        variants={newsVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-contain" 
                        />
                        {/* <h3 className="absolute text-white font-bold text-lg">{item.title}</h3> */}
                    </motion.div>
                ))}
            </div>
            </section>
        </>
    );
}

export default Teams;
