import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PlayerNetwork from "../PlayerNetwork/PlayerNetwork";


const TeamDetail = () => {
    const [team,setTeam]= useState([])
    const [selectPlayer,setSelectPlater]= useState([])

    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/api/teams/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.name) {
                    setTeam(data);
                    setSelectPlater(data.players[0])
                }
            })
            .catch(err => {
                alert(err);
            });

        return ()=> setTeam([]);

     }, [id]);
    
    const handlerSelectPlayer = (player) =>{

        setSelectPlater(player)
    }

    return ( 
        <section className="flex flex-col px-1 mx-2 w-100 lg:px-16 xl:px-16 2xl:mx-52 lg:mx-14 md:mx-28 sm:mx-6 ">
        <h2 className="font-oswald text-4xl font-bold text-center mb-12 text-[#f0f0f0]">TEAM {team.Game?.name.toUpperCase()}</h2>
        <div className="flex flex-col min-h-96 lg:flex-row sm:flex-col md:flex-col lg:space-x-5">

            {/* Miembros del Equipo */}
            <div className="bg-[#1b1a1b] p-5 rounded-3xl w-full lg:w-1/3 mb-5 lg:mb-0 space-y-2 h-100 flex-grow">
                <span className="font-oswald flex text-xl font-bold py-2 text-[#f0f0f0]">Miembros del Equipo</span>

                {team.players?.map((player) => (
                    <button 
                        key={player.id} 
                        onClick={() => handlerSelectPlayer(player)} 
                        className={`rounded-xl w-full h-auto flex flex-row items-center px-5 transition duration-500 ease-in-out ${selectPlayer.id === player.id ? 'text-black bg-[#f9b6f9]' : 'bg-transparent'}`}
                    >
                        <img src={player.img} alt="player" className="w-10 h-10 mr-2 rounded-full bg-[#1f1f21]" />

                        <div className="flex flex-col py-2">
                            <div>
                                <span className={`text-sm ${selectPlayer.id === player.id ? 'text-[#1b1a1b]' : 'text-[#f0f0f0]'}`}>{player.name}</span>
                                <span className={`font-oswald text-sm ${selectPlayer.id === player.id ? 'text-[#1b1a1b]' : 'text-[#f0f0f0]'}`}> '{player.nick}'</span>
                            </div>
                            <span className={`text-start text-sm font-bold ${selectPlayer.id === player.id ? 'text-[#1b1a1b]' : 'text-[#f0f0f0]'}`}>{player.role}</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Detalles del Jugador Seleccionado */}
            {selectPlayer && (
                <div className="bg-[#1b1a1b] rounded-3xl p-5 w-full lg:w-2/3 flex flex-col lg:flex-row justify-center h-100 flex-grow transition duration-300 ease-in-out scale-100">
                    <img 
                        src={selectPlayer.img} 
                        alt="player" 
                        className="mask-gradient w-60 h-60 rounded-full mx-auto lg:mx-0 lg:mr-2 xl:mr-2 bg-[linear-gradient(0deg,_#0000_0%,_#ffffff1a_100%)] my-auto" 
                    />

                    <div className="flex flex-col justify-center m-2">
                        <div className="flex flex-col text-2xl font-bold text-center">
                            <span className="font-oswald text-3xl text-[#f9b6f9]">{selectPlayer.name}</span>
                            <span className="font-oswald text-2xl text-[#f0f0f0]">{selectPlayer.nick}</span>
                        </div>
                        <div className="grid items-center grid-cols-2 gap-10 my-3 text-lg">
                            
                            <div className="flex flex-col">
                                <span className="font-oswald text-xs font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg text-[#f9b6f9]">EDAD</span>
                                <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-[#f0f0f0]">{selectPlayer.age}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-oswald text-xs font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg text-[#f9b6f9]">NACIONALIDAD</span>
                                <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-[#f0f0f0]">{selectPlayer.nationality}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-oswald text-xs font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg text-[#f9b6f9]">ROL</span>
                                <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-[#f0f0f0]">{selectPlayer.role}</span>
                            </div>
                            
                            <div className="flex flex-col">
                                <span className="font-oswald text-xs font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg text-[#f9b6f9]">SOCIAL</span>
                                <PlayerNetwork player={selectPlayer} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>

        </section>

     );
}
 
export default TeamDetail;