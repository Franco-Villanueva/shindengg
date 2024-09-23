import React from 'react';

const MatchCard = ({ date, competition, teamA, teamAImg, teamB, teamBImg, score }) => {
  return (
    <div className="mb-6 p-4 bg-[#db8282] rounded-lg shadow-md flex flex-col justify-between">
      {/* Header con la fecha y la competición */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={competition.logo} alt={competition.name} className="h-10 w-10 object-contain" />
        </div>
        <div className="text-right leading-tight">
          <span className="text-sm text-[#f0f0f0]">{date}</span>
          <br />
          <span className="text-xs text-[#5e627e]">{competition.name}</span>
        </div>
      </div>

      {/* Cuerpo con los equipos y el resultado */}
      <div className="flex items-center justify-between">
        {/* Equipo A */}
        <figure className="flex items-center">
          <img src={teamAImg} alt={teamA} className="h-10 w-10 object-contain mr-2" />
          <figcaption>
            <div className="text-sm font-bold text-[#f0f0f0]">{teamA}</div>
            <div className="text-xs text-[#5e627e]">{teamA}</div>
          </figcaption>
        </figure>

        {/* Resultado */}
        <div className="match-result text-lg font-bold text-[#f0f0f0]">
          {score}
        </div>

        {/* Equipo B */}
        <figure className="flex items-center">
          <figcaption className="text-right">
            <div className="text-sm font-bold text-[#f0f0f0]">{teamB}</div>
            <div className="text-xs text-[#5e627e]">{teamB}</div>
          </figcaption>
          <img src={teamBImg} alt={teamB} className="h-10 w-10 object-contain ml-2" />
        </figure>
      </div>
    </div>
  );
};

export default MatchCard;
