import React,{useState} from "react";
import { useParams,Link } from "react-router-dom";


const TeamDetail = () => {

    const [team,setTeam]= useState({})

    const {id} = useParams()

    // useEffect(() => {
    //     fetch(`http://localhost:3001/teams/${id}`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             if (data.name) {
    //                 setTeam(data);
    //             }
    //         })
    //         .catch(err => {
    //             alert(err);
    //         });

    //     return ()=> setTeam({});

    //  }, [id]);

    console.log(id)

    return ( 
        <>
        <h1 className="bg-white">VALORANT</h1>
        </>
     );
}
 
export default TeamDetail;