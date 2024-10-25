import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faTwitch, faKickstarter } from '@fortawesome/free-brands-svg-icons';


const PlayerNetwork = ({ player }) => {
  // Busca manualmente los enlaces de Twitter, Instagram y Twitch
  const xLink = player.network?.find((net) => net.includes("x.com"));
  const instagramLink = player.network?.find((net) => net.includes("instagram.com"));
  const twitchLink = player.network?.find((net) => net.includes("twitch.tv"));
  const kickLink = player.network?.find((net) => net.includes("kick.com"));

  return (
    <div className="flex flex-row space-x-4">
      
      {/* Renderiza el enlace de Twitter si existe */}
      {xLink && (
        <a
          className="transition-transform duration-300 text-white flex items-center space-x-2  hover:text-[#f9b6f9]"
          href={xLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
        </a>
      )}

      {/* Renderiza el enlace de Instagram si existe */}
      {instagramLink && (
        <a
          className="transition-transform duration-300 text-white flex items-center space-x-2  hover:text-[#f9b6f9]"
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
        </a>
      )}

      {/* Renderiza el enlace de Twitch si existe */}
      {twitchLink && (
        <a
          className="transition-transform duration-300 text-white flex items-center space-x-2  hover:text-[#f9b6f9]"
          href={twitchLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitch} className="text-xl" />
        </a>
      )}

      {kickLink && (
        <a
          className="transition-transform duration-300 text-white flex items-center space-x-2  hover:text-[#f9b6f9]"
          href={kickLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faKickstarter} className="text-xl" />
        </a>
      )}

      {/* Si no hay redes sociales, muestra este mensaje */}
      {!xLink && !instagramLink && !twitchLink && (
        <span className="text-white">No networks</span>
      )}
    </div>
  );
};

export default PlayerNetwork;
