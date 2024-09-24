import React from 'react';

const MatchCard = ({ date, competition, teamA, teamAImg, teamB, teamBImg, score }) => {
  return (
    <div className="mb-6 p-4 bg-[#ffffff23] rounded-lg shadow-sm flex flex-col justify-between">
      {/* Header con la fecha y la competición */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={competition.logo} alt={competition.name} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
        </div>
        <div className="text-right leading-tight">
          <span className="text-xs sm:text-sm lg:text-base text-[#f0f0f0]">{date}</span>
          <br />
          <span className="text-[10px] sm:text-xs lg:text-sm text-[#5e627e]">{competition.name}</span>
        </div>
      </div>

      {/* Cuerpo con los equipos y el resultado */}
      <div className="flex items-center justify-between">
        {/* Equipo A */}
        <figure className="flex items-center">
          <img src={teamAImg} alt={teamA} className="h-8 w-8 sm:h-10 sm:w-10 object-contain mr-2" />
          <figcaption>
            <div className="text-xs sm:text-sm lg:text-base font-bold text-[#f0f0f0]">{teamA}</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-[#5e627e]">{teamA}</div>
          </figcaption>
        </figure>

        {/* Resultado */}
        <div className="match-result text-base sm:text-lg lg:text-xl font-bold text-[#f0f0f0]">
          {score}
        </div>

        {/* Equipo B */}
        <figure className="flex items-center">
          <figcaption className="text-right">
            <div className="text-xs sm:text-sm lg:text-base font-bold text-[#f0f0f0]">{teamB}</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-[#5e627e]">{teamB}</div>
          </figcaption>
          <img src={teamBImg} alt={teamB} className="h-8 w-8 sm:h-10 sm:w-10 object-contain ml-2" />
        </figure>
      </div>
    </div>
  );
};

export default MatchCard;
