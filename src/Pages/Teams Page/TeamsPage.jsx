import React, { useEffect, useState } from 'react';
import Teams from '../../Components/Teams/Teams';
import { Route, Routes } from 'react-router-dom';
import TeamDetail from '../../Components/Teams/TeamDetail/TeamDetail';

const TeamsPage = () => {

    const [teams, setTeams] = useState()
    
    useEffect(() => {
        window.scrollTo(0, 0);

        fetch(`http://localhost:3001/api/teams`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.length) {  // Si data es un array, verificar con length
                    console.log(data)
                    setTeams(data);
                }
            })
            .catch(err => {
                alert(err);
            });

        return () => setTeams([]);
     }, []);

    return ( 
        <div className="relative w-full h-full overflow-x-hidden">
            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 object-contain h-auto bg-center bg-cover opacity-40"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/df21bcvs0/image/upload/v1726845984/Fondos%20shindengg/hxvzrg4pduildibf0snk.webp)`,
                      
                }}
            ></div>
            
            {/* Capa superpuesta para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Contenido principal */}
            

            <Routes>
                <Route path="/" element={<div className="relative w-full h-full"><Teams teams={teams} /></div>} />
                <Route path=":id" element={<div className="relative w-full h-full"><TeamDetail /></div>} />
                
            </Routes>
        </div>
    );
}

export default TeamsPage;
