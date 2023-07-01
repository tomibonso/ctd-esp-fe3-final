import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from './utils/routes'
import ThemeContext from './utils/theme'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, handleChangeTheme} = useContext(ThemeContext)
  const navigate = useNavigate()

  return (
    <nav className='navbar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='divNavbar'>
        <a className='back'>
          <h4 onClick={()=> navigate(-1)}>Back</h4>
        </a>
        <Link to={routes.home}><h4 className='link'>Home</h4></Link>
        <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
        <Link to={routes.favs}><h4 className='link'>Favs</h4></Link>
        <button onClick={handleChangeTheme} style={{background: theme.background, color:theme.font}}>Change Theme</button>
      </div>
    </nav>
  )
}

export default Navbar