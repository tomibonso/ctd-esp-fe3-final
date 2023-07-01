import React from 'react'
import { useContextGlobal } from "../Components/utils/global.context";
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [detail, setDetail] = useState({})
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
    .then(res => setDetail(res.data))
  }, [])

  const {favs, addFavs, removeFavs} = useContextGlobal()

  const favsChecker = (id) => {
    const boolean = favs.some((doctor) => doctor.id === id)
    return boolean
  }

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <img src="/public/img/doctor.jpg" width={'200px'}/>
      <h2>{detail.name}</h2>
      <h3>{detail.username}</h3>
      <h4>({detail.id})</h4>
      {favsChecker(detail.id) ? (
        <button onClick={()=> removeFavs(detail.id)} className="favButton">Remove fav</button>
        ) : (
        <button onClick={()=> addFavs(detail)} className="favButton">Add fav</button>
      )}
    </>
  )
}

export default Detail