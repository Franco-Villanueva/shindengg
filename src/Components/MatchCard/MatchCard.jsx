// src/components/MatchCard/MatchCard.jsx
import React from 'react';

const MatchCard = ({ date, competition, teamA, teamAImg, teamB, teamBImg, score }) => {
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedTime = new Date(date).toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="bg-[#2c2c2e] rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-gray-400">{formattedDate} - {formattedTime}</span> {/* Mostrar fecha y hora */}
        <span className="text-sm text-[#f9b6f9]">{competition.name}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={teamAImg} alt={teamA} className="w-8 h-8 mr-2" />
          <span>{teamA}</span>
        </div>
        <span className="text-xs text-gray-500">vs</span>
        {teamB && (
          <div className="flex items-center">
            <span>{teamB}</span>
            <img src={teamBImg} alt={teamB} className="w-8 h-8 ml-2" />
          </div>
        )}
      </div>
      <div className="text-center mt-2 text-sm text-gray-300">
        {score}
      </div>
    </div>
  );
};

export default MatchCard;
