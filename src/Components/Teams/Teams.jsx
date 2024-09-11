import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Teams = ({teams}) => {

    const newsVariants = {
        hidden: { scale: 0, opacity: 0 }, // Inicia con escala 0 (totalmente reducido) y opacidad 0
        visible: { scale: 1, opacity: 1 } // Expande a escala 1 (tamaño completo) y opacidad 1
    };

    return ( 
        <>
        <section className="relative px-4 md:px-14 lg:px-24 xl:px-52">
        <h2 className="mx-4 md:mx-8 lg:mx-12 xl:mx-16 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#f9b6f9] mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            TEAMS
        </h2>
            <div className="flex flex-wrap justify-center md:justify-between w-full h-full p-16">
                {teams?.map((item) => (
                    <Link to={`${item.id}`} key={item.id}>
                    <motion.div
                        key={item.id}
                        className="
                            bg-[#ffffff23] rounded-3xl flex flex-col items-center justify-center text-center overflow-hidden cursor-pointer m-2
                            h-36 w-36     
                            sm:h-36 sm:w-36  
                            md:h-40 md:w-40  
                            lg:h-44 lg:w-44  
                            xl:h-52 xl:w-52
                        "
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        variants={newsVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-contain p-5" 
                        />
                    </motion.div>
                    </Link>
                ))}
            </div>
        </section>
        </>
    );
}

export default Teams;
