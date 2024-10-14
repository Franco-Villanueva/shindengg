import React from 'react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

const MatchCard = ({ date, competition, teamA, akaA, teamAImg, teamB, akaB, teamBImg, score, kills, position, player, gameType }) => {

  const fecha = parseISO(date);

  const fechaFormateada = format(fecha, 'dd', { locale: es });
  const monthName = fecha.toLocaleString('es-ES', { month: 'long' });
  const horaFormateada = format(fecha, 'HH:mm');

  return (
    <div className="rounded-lg px-2 lg:px-4 xl:px-6 py-4 lg:py-6 xl:py-8  bg-[#1f1f21] hover:shadow-lg transition-shadow duration-300">
      {/* Imagen del juego arriba a la izquierda */}
      <div className="flex items-center justify-between mb-4">
        <img src={competition.logo} alt={competition.name} className="object-contain w-12 h-12" />
        
        {/* Información de la fecha debajo de la competencia */}
        <div className="flex flex-col items-end justify-end">
          <span className="font-oswald text-lg md:text-lg lg:text-xl text-[#f9b6f9] font-semibold">{competition.name}</span>
          <span className="text-sm text-gray-400">{fechaFormateada} {monthName} - {horaFormateada}</span>
        </div>
      </div>
      <hr className="mb-4 border-gray-700" />

      {/* Renderizado para partidas individuales (como Fortnite) */}
      {gameType === 'individual' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {/* Imagen del equipo del jugador */} 
            <div className='flex flex-row items-center'>
              <img src={player.team.logo} alt={player.team.name} className="bg-[#f9b6f9] w-14 h-14 rounded-full border border-[#f9b6f9] mr-2 p-2" />
              <div>
                <span className="pr-3 text-sm text-white font-oswald md:text-sm lg:text-lg">{player.name}</span>
                <p className="text-sm text-gray-400">{player.team.name}</p> 
              </div>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-end space-x-2 text-white">
              <p className="font-oswald md:text-sm lg:text-base">
                KILLS: <span className=" md:text-sm lg:text-base text-[#f9b6f9]">{kills}</span> 
              </p>
              <p className="font-oswald md:text-sm lg:text-base">
                POSICIÓN: <span className=" md:text-sm lg:text-base text-[#f9b6f9]">{position}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Renderizado de partidos de equipos
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={teamAImg} alt={teamA} className="bg-[#f9b6f9] w-12 h-12 rounded-full p-2" />

              <div>
                <span className="text-sm text-white font-oswald md:text-lg lg:text-xl">{akaA}</span>
                <p className="text-sm text-gray-400">{teamA}</p> 
              </div>
              
            </div>
            <div className="font-oswald md:text-lg lg:text-xl font-bold text-[#f9b6f9]">
              {score ? `${score}` : 'Próximo partido'}
            </div>
            {teamB && (
              <div className="flex items-center space-x-2">
                <div className='flex flex-col'>
                <span className="text-sm text-white font-oswald md:text-lg lg:text-xl text-end">{akaB}</span>
                <p className="text-sm text-gray-400 text-end">{teamB}</p> 
                </div>
                <img src={teamBImg} alt={teamB} className="w-12 h-12 rounded-full border border-[#f9b6f9] p-2" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchCard;
