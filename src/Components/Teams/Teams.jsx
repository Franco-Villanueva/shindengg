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
            <div className="flex flex-wrap gap-8 w-full h-full p-8 justify-center items-center">
                {teams?.map((item) => (
                    <motion.div
                        key={item.id}
                        className="h-48 w-48 bg-[#f9b6f9] rounded-lg flex flex-col items-center justify-center text-center overflow-hidden cursor-pointer"
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        variants={newsVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover" 
                        />
                        <h3 className="absolute text-white font-bold text-lg">{item.title}</h3>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default Teams;
