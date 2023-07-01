import React from "react"
import { useState } from 'react'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    userName: '',
    mail: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(user.userName.length > 3 && user.mail.length > 6){
        setShow(true)
        setError(false)
    }else{
        setError(true)
    }
  }

  const formulario = () => {
    localStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo:</label>
        <input type="text" disabled={show} onChange={(e) => setUser((prevUser) => ({...prevUser, userName: e.target.value}))}/>
        <label>Mail:</label>
        <input type="email" disabled={show} onChange={(e) => setUser((prevUser) => ({...prevUser, mail: e.target.value}))}/>
        <button>Enviar</button>
        {error && 'Por favor chequea que la información sea correcta'}
      </form>
      {show ? 
        <>
            <h4 className="msjGrax" user={user}>Gracias por contactarnos! Te enviaremos una respuesta.</h4>
        </>
        :
        null
      }
    </div>
  )
}

export default Form