import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import ThemeContext from '../Components/utils/theme'

const Layout = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div style={{background: theme.background, color:theme.font}}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout