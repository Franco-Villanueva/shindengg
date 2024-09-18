import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Teams = ({ teams = [] }) => { // Si teams es undefined, lo convertimos en un array vacío
    console.log(teams);

    const newsVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    };

    if (!Array.isArray(teams)) {
        console.error("The 'teams' prop is not an array:", teams);
        return null; // Renderizar nada si 'teams' no es un array
    }

    return (
        <section className="h-screen w-100 flex flex-col justify-center pt-16 px-16 mx-2 xl:mx-52 lg:mx-24 md:mx-14 sm:mx-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#f9b6f9] mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                TEAMS
            </h2>
            <div className="flex flex-wrap justify-center md:justify-between">
                {teams.map((item) => (
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
                                alt={item.game} 
                                className="w-full h-full object-contain p-5" 
                            />
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Teams;
