import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MatchCard from '../MatchCard/MatchCard'; // Importa el componente

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 
  'Mayo', 'Junio', 'Julio', 'Agosto', 
  'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

// Datos de partidos por mes con información detallada
const matchesByMonth = {
  Enero: [
    { game: 'CS2', competition: 'Tournament 1', date: '2024-01-15', teamA: 'Shindengg', teamB: 'Team A', result: '3-2' },
    { game: 'Valorant', competition: 'Tournament 2', date: '2024-01-22', teamA: 'Shindengg', teamB: 'Team B', result: '2-0' },
    { game: 'CS2', competition: 'Tournament 1', date: '2024-01-15', teamA: 'Shindengg', teamB: 'Team A', result: '3-2' },
    { game: 'CS2', competition: 'Tournament 1', date: '2024-01-15', teamA: 'Shindengg', teamB: 'Team A', result: '3-2' },
    { game: 'Valorant', competition: 'Tournament 2', date: '2024-01-22', teamA: 'Shindengg', teamB: 'Team B', result: '2-0' },
    { game: 'CS2', competition: 'Tournament 1', date: '2024-01-15', teamA: 'Shindengg', teamB: 'Team A', result: '3-2' },
    

  ],
  Febrero: [
    { game: 'Fortnite', competition: 'World Cup', date: '2024-02-12', teamA: 'Shindengg', teamB: 'Team C', result: '1st Place' }
  ],
  Septiembre: [
    { game: 'CS2', competition: 'Major Tournament', date: '2024-09-15', teamA: 'Shindengg', teamB: 'Team D', result: '3-1' }
  ],
  Abril: [],
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
        className={`relative min-h-96 h-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full transition-all duration-500`}
        >
        {months?.map((month) => (
          <motion.div
            key={month}
            layout
            onClick={() => handleMonthClick(month)}
            className={`bg-[#1b1a1b] p-5 lg:p-12 xl:p-12 rounded-3xl cursor-pointer ${selectedMonth === month
              ? 'absolute inset-0 z-10 h- w-100' 
              : 'text-center'} `}
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedMonth === month || !selectedMonth ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`text-xs sm:text-xl lg:text-2xl font-bold 
              ${month === months[new Date().getMonth()] ? 'text-[#f9b6f9]' : 'text-[#f0f0f0]'}`}>
              {month}
            </span>
            {/* Mostrar los partidos del mes seleccionado */}
            {selectedMonth === month && matchesByMonth[month] && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchesByMonth[month].map((match, index) => (
                  <MatchCard
                    key={index}
                    date={match.date}
                    competition={{ name: match.competition, logo: 'path/to/logo.png' }} // Cambia según tu estructura
                    teamA={match.teamA}
                    teamAImg={match.teamAImg}
                    teamB={match.teamB}
                    teamBImg={match.teamBImg}
                    score={match.result}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Calendary;
