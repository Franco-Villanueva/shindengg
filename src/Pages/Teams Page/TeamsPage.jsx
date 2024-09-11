import React, { useEffect } from 'react';
import Background from '../../assets/fondo2.jpeg';
import Teams from '../../Components/Teams/Teams';
import { Route, Routes, useParams, Link } from 'react-router-dom';
import teams from './jsonT';
import TeamDetail from '../../Components/Teams/TeamDetail/TeamDetail';

const TeamsPage = () => {
    
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    return ( 
        <div className="relative w-full min-h-screen flex justify-center items-center py-44">
            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 bg-cover bg-center object-contain blur-sm opacity-40"
                style={{
                    backgroundImage: `url(${Background})`,
                    filter: 'blur(10px)'  
                }}
            ></div>
            
            {/* Capa superpuesta para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Contenido principal */}
            

            <Routes>
                <Route path="/" element={<div className="relative w-full h-full"><Teams teams={teams} /></div>} />
                <Route path=":id" element={<div className="relative w-full h-full"><TeamDetail /></div>} />
                {/* <Route path=":id/player" element={<PlayerDetail />} /> */}
            </Routes>
        </div>
    );
}

export default TeamsPage;
