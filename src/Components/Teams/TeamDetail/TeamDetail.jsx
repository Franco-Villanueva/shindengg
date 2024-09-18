import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";


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
    
    const handlerSelectPlayer = (id) =>{
        const player = team.players.find(player => player.id === id)
        setSelectPlater(player)
    }

    console.log(team.players)
    console.log(selectPlayer)

    return ( 
        <>
        <section className="h-full lg:h-screen xl:h-screen w-100 flex flex-col justify-center px-1 lg:px-16 xl:px-16  mx-2 xl:mx-52 lg:mx-24 md:mx-28 sm:mx-6 my-44 lg:my-0 xl:my-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Equipo {team.name}</h2>
            <div className=" flex flex-col lg:flex-row sm:flex-col md:flex-col lg:space-x-5 h-auto justify-between">

                <div className="bg-[#ffffff23] p-5 rounded-3xl w-full lg:w-1/3  mb-5 lg:mb-0 space-y-2">
                    <span className=" flex text-xl font-bold py-2 text-white">Miembros del Equipo</span>

                    {team.players?.map((player) =>(
                        
                        <button key={player.id} onClick={()=>handlerSelectPlayer(player.id)} className={`rounded-xl w-full h-auto flex flex-row items-center px-5 transition duration-500 ease-in-out ${selectPlayer.id === player.id ? 'text-black bg-[#f9b6f9]' : 'bg-transparent' }`} >
                        
                        <img src='p' alt="player" className="w-10 h-10 rounded-full bg-slate-600 mr-2" />

                        <div className="flex flex-col py-2 items-center">
                            <div>
                                <span className={`text-sm ${selectPlayer.id === player.id ? 'text-black' : 'text-white'}`}>{player.name}</span><span className={` text-sm ${selectPlayer.id === player.id ? 'text-black' : 'text-white'}`}>'{player.nick}'</span>
                            </div>
                            <span className={` text-xs ${selectPlayer.id === player.id ? 'text-black' : 'text-white'}`}>{player.role}</span>
                        </div>
                        
                        
                        </button>
                        
                    ))}
                    
                    
                </div>

                {selectPlayer && (
                    <div className="bg-[#ffffff23] rounded-3xl p-5 flex w-full lg:w-2/3 flex-col lg:flex-row sm:flex-col h-auto justify-center transition duration-300 ease-in-out scale-100">

                    <img 
                    src='p' 
                    alt="player" 
                    className=" w-60 h-60 rounded-3xl mx-auto lg:mx-0 lg:mr-2 xl:mr-2 bg-black my-auto" />
                                
                    <div className="flex flex-col m-2 justify-center">
                        <div className="flex flex-col text-2xl font-bold text-center">
                            <span className="text-3xl text-[#f9b6f9]">{selectPlayer.name}</span>
                            <span className="text-2xl text-white">{selectPlayer.nick}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-10 text-lg items-center my-3">
                            
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg  text-[#f9b6f9]">Nacionalida:</span>
                                <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg  text-white">{selectPlayer.nationality}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className=" text-xs font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg  text-[#f9b6f9]">rol:</span>
                                <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg  text-white">{selectPlayer.role}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className=" text-xs font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg  text-[#f9b6f9]">redes:</span>
                                <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-white">icon icon icon</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold sm:text-xs md:text-sm lg:text-base xl:text-lg  text-[#f9b6f9]">edad:</span>
                                <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-white">{selectPlayer.age}</span>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                </div>
                )}
                
            </div>
        </section>
        </>
     );
}
 
export default TeamDetail;