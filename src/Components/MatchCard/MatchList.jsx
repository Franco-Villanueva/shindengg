// src/components/MatchList/MatchList.jsx
import React from 'react';
import MatchCard from './MatchCard'; // Importar el componente de tarjetas de partidos

const MatchList = ({ matches }) => {
  if (matches.length === 0) {
    return <p className="text-center text-gray-400">No hay partidos programados para este mes.</p>;
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {matches.map((match, index) => (
        <MatchCard
          key={index}
          date={match.date}
          competition={{ name: match.competition, logo: match.Game?.img || '' }}
          teamA={match.teamA?.name || match.Player?.team?.name}
          teamAImg={match.teamA?.logo || match.Player?.team?.logo}
          teamB={match.teamB ? match.teamB.name : ''}
          teamBImg={match.teamB ? match.teamB.logo : ''}
          score={match.result || `${match.kills || 0} Kills - Position ${match.position || 'N/A'}`}
        />
      ))}
    </div>
  );
};

export default MatchList;
