// src/components/MatchList/MatchList.jsx
import React from 'react';
import MatchCard from './MatchCard'; // Importar el componente de tarjetas de partidos

const MatchList = ({ matches }) => {
  if (matches.length === 0) {
    return <p className="text-center text-gray-400 mt-10">No hay partidos programados para este mes.</p>;
   
  }

  return (
    <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-4">
      {matches.map((match, index) => {
        const isTeamMatch = !!(match.teamA && match.teamB); // Si hay teamA y teamB, es un partido de equipo

        return (
          <MatchCard
            key={index}
            date={match.date}
            competition={{ name: match.competition, logo: match.Game?.img || '' }}
            
            // Datos para partidas de equipos
            teamA={isTeamMatch ? match.teamA.name : match.Player?.team?.name}
            akaA={isTeamMatch ? match.teamA.aka : ''}
            teamAImg={isTeamMatch ? match.teamA.logo : match.Player?.team?.logo}
            teamB={isTeamMatch ? match.teamB?.name : ''}
            akaB={isTeamMatch ? match.teamB.aka : ''}
            teamBImg={isTeamMatch ? match.teamB?.logo : ''}
            
            // Score o kills/position dependiendo del tipo de match
            score={
              isTeamMatch 
                ? match.result
                : '' // Mostrar kills y posición si es individual
            }

            // Determinamos el tipo de partido: equipo o individual
            gameType={isTeamMatch ? 'team' : 'individual'}
            player={match.Player} // Solo relevante para partidas individuales
            kills={match.kills == null ? 'N/A' : match.kills}   // Solo relevante para partidas individuales
            position={match.position == null ? 'N/A' : match.position} // Solo relevante para partidas individuales
          />
        );
      })}
    </div>
  );
};

export default MatchList;
