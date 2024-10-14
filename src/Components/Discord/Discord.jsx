import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Discord = () => {
    return ( 

        <div className="flex items-center justify-center min-h-96 bg-[#1b1a1b] p-2 pt-16 xl:mx-52 lg:mx-24 md:mx-14 sm:mx-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl bg-[linear-gradient(0deg,_#0000_0%,_#ffffff1a_100%)] rounded-3xl p-8 space-y-6 md:space-y-0 md:space-x-8">
            <div className="max-w-lg space-y-4 text-left">
            <h2 className="text-3xl font-bold text-white font-oswald">
                ÚNETE A NUESTRA COMUNIDAD DE DISCORD
            </h2>
            <p className="text-lg text-gray-300">
                Conéctate con nuestra comunidad, comparte ideas y mantente actualizado en un espacio vibrante y colaborativo.
            </p>
            </div>
            <a href="https://discord.com/invite/ukfDYRf3Wm" className="w-full md:w-auto bg-[#f9b6f9] hover:bg-rose-300 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center justify-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105">
            
                            
            
            <span className="font-oswald">Unirse ahora</span>

                <FontAwesomeIcon icon={faDiscord} className="text-2xl text-[#1b1b1b]" />

            </a>
        </div>
        </div>

     );
}
 
export default Discord;