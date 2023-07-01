import React from "react";
import { useContextGlobal } from "./utils/global.context";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = ({doctor}) => {
  
  const {state, dispatch} = useContextGlobal()
  const [docs, setDocs] = useState([])
  const {favs, addFavs, removeFavs} = useContextGlobal()

  console.log("favorites are", favs);

  const favsChecker = (id) => {
    const boolean = favs.some((doctor) => doctor.id === id)
    return boolean
  }

  const urlApi = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(urlApi)
      .then(res => setDocs(res.data))
      .catch(error => console.log(error));
  }, [urlApi]);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: 'ADD_FAV', payload: state.doctor})
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <ul>
        {docs.map(doctor => (
          <li key={doctor.id} className="list-item">
            <Link to={'/dentista/' + doctor.id}>
              <img src="/public/img/doctor.jpg" width={"270px"}/> 
              <div>
                {doctor.name} - {doctor.username} ({doctor.id}) 
              </div>
            </Link>           
            {favsChecker(doctor.id) ? (
            <button onClick={()=> removeFavs(doctor.id)} className="favButton">Remove fav</button>
            ) : (
            <button onClick={()=> addFavs(doctor)} className="favButton">Add fav</button>
          )}
          </li>
        ))}
        </ul>
        
    </div>
  )
}

export default Card