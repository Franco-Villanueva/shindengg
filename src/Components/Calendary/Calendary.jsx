import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MatchList from '../MatchCard/MatchList'; // Importar el componente MatchList

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 
  'Mayo', 'Junio', 'Julio', 'Agosto', 
  'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const Calendary = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [matches, setMatches] = useState({});

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/matchs');
        const data = await response.json();

        const groupedMatches = data.reduce((acc, match) => {
          const monthName = months[new Date(match.date).getMonth()];
          if (!acc[monthName]) acc[monthName] = [];
          acc[monthName].push(match);
          return acc;
        }, {});

        setMatches(groupedMatches);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  const handleMonthClick = (month) => {
    setSelectedMonth(month === selectedMonth ? null : month);
  };

  return (
    <section className="h-screen w-100 flex flex-col justify-center px-1 lg:px-16 xl:px-16 mx-0 2xl:mx-52 lg:mx-14 md:mx-28 sm:mx-6 my-0 md:my-0 lg:my-0 xl:my-0">
      <h2 className='font-oswald text-3xl mt-7 sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#f9b6f9]'>CALENDARIO</h2>
      <div
        layout
        className={`relative min-h-96 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4`}
        >
        {months.map((month) => (
          <motion.div
            key={month}
            layout
            onClick={() => handleMonthClick(month)}
            className={`font-oswald bg-[#1b1a1b] p-5 lg:p-6 xl:p-9 rounded-3xl cursor-pointer scrollbar-custom ${selectedMonth === month
              ? 'absolute inset-0 z-10 h-100 w-100 overflow-y-auto' 
              : 'text-center'} `}
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedMonth === month || !selectedMonth ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`text-base sm:text-xl lg:text-2xl font-bold 
              ${month === months[new Date().getMonth()] ? 'text-[#f9b6f9]' : 'text-[#f0f0f0]'}`}>
              {month}
            </span>

            {/* Mostrar los partidos del mes seleccionado usando MatchList */}
            {selectedMonth === month && (
              <MatchList matches={matches[month] || []} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Calendary;
