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
      <div className="flex justify-between items-center mb-4">
        <img src={competition.logo} alt={competition.name} className="w-12 h-12 object-contain" />
        
        {/* Información de la fecha debajo de la competencia */}
        <div className="flex flex-col justify-end items-end">
          <span className="text-lg md:text-lg lg:text-xl text-[#f9b6f9] font-semibold">{competition.name}</span>
          <span className="text-xs text-gray-400">{fechaFormateada} {monthName} - {horaFormateada}</span>
        </div>
      </div>
      <hr className="border-gray-700 mb-4" />

      {/* Renderizado para partidas individuales (como Fortnite) */}
      {gameType === 'individual' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {/* Imagen del equipo del jugador */} 
            <div className='flex flex-row items-center'>
              <img src={player.team.logo} alt={player.team.name} className="bg-[#f9b6f9] w-14 h-14 rounded-full border border-[#f9b6f9] mr-2 p-2" />
              <div>
                <span className="text-sm md:text-sm lg:text-lg text-white font-semibold pr-3">{player.name}</span>
                <p className="text-xs text-gray-400">{player.team.name}</p> 
              </div>
            </div>

            <div className="text-white flex flex-wrap flex-row items-center space-x-2 justify-end">
              <p className="font-semibold text-xs md:text-sm lg:text-base">
                KILLS: <span className="text-xs md:text-sm lg:text-base text-[#f9b6f9]">{kills}</span> 
              </p>
              <p className="font-semibold text-xs md:text-sm lg:text-base">
                POSICIÓN: <span className="text-xs md:text-sm lg:text-base text-[#f9b6f9]">{position}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Renderizado de partidos de equipos
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={teamAImg} alt={teamA} className="bg-[#f9b6f9] w-12 h-12 rounded-full p-2" />

              <div>
                <span className="text-sm md:text-lg lg:text-xl text-white font-semibold">{akaA}</span>
                <p className="text-xs text-gray-400">{teamA}</p> 
              </div>
              
            </div>
            <div className="text-center mt-2 text-sm md:text-lg lg:text-xl font-bold text-[#f9b6f9]">
              {score ? `${score}` : 'Próximo partido'}
            </div>
            {teamB && (
              <div className="flex items-center space-x-2">
                <div>
                <span className="text-sm md:text-lg lg:text-xl text-white font-semibold">{akaB}</span>
                <p className="text-xs text-gray-400">{teamB}</p> 
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
