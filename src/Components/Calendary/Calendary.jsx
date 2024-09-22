import React, { useState } from 'react';
import { motion } from 'framer-motion';

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 
  'Mayo', 'Junio', 'Julio', 'Agosto', 
  'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const matchesByMonth = {
  Enero: ['Partido 1', 'Partido 2'],
  Febrero: ['Partido 3'],
  Setiembre: ['Partido 3'],
  
};

const Calendary = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthClick = (month) => {
    setSelectedMonth(month === selectedMonth ? null : month);
  };

  return (
    <section className="h-screen w-100 flex flex-col justify-center px-1 lg:px-16 xl:px-16 mx-2 xl:mx-52 lg:mx-24 md:mx-28 sm:mx-6 my-20 md:my-0 lg:my-0 xl:my-0">
      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#f9b6f9]'>Calendario</h2>
      <div
        layout
        className={`relative min-h-96 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full transition-all duration-500`}
        >
        {months?.map((month) => (
            <motion.div
            key={month}
            layout
            onClick={() => handleMonthClick(month)}
            className={`p-5 lg:p-12 xl:p-12 rounded-3xl cursor-pointer text-center bg-[#1b1a1b] ${selectedMonth === month
                ? 'absolute inset-0 z-10 h-100 w-100' 
                : ''} `}
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedMonth === month || !selectedMonth ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            >
            <span className={`text-xs sm:text-xl lg:text-2xl font-bold 
                ${month === months[new Date().getMonth()] ? 'text-[#f9b6f9]' : 'text-[#f0f0f0]'}`}>
                {month}
            </span>
            {selectedMonth === month && (
                <div className="mt-4">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold">Partidos:</h4>
                <ul className="mt-2 text-sm sm:text-base lg:text-lg text-left">
                    {matchesByMonth[month].map((match, index) => (
                    <li key={index}>{match}</li>
                    ))}
                </ul>
                </div>
            )}
            </motion.div>
        ))}
        </div>
    </section>
  );
};

export default Calendary;
