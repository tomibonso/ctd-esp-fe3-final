import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { Link } from 'react-router-dom';
import { useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContextGlobal()

  const {favs, addFavs, removeFavs} = useContextGlobal()

  const favsChecker = (id) => {
    const boolean = favs.some((doctor) => doctor.id === id)
    return boolean
  }

  return (
    <>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
    <div className="card-grid">
      <ul>
        {favs.length > 0 ? favs.map(doctor => (
          <li key={doctor.id} className="list-item">
            <h1>Dentist Added</h1>  
            <Link to={'/dentista/' + doctor.id}> 
              <img src="./public/img/doctor.jpg" width={"200px"}/>
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
        )): <h1>No added favs</h1>
        }
      </ul>
    </div>
    </>
  )
}

export default Favs