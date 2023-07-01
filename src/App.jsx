import { Route, Routes } from 'react-router-dom'
import Detail from './Routes/Detail'
import Layout from './Layout/Layout'
import Favs from './Routes/Favs'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import { routes } from './Components/utils/routes'
import { useState } from 'react'
import ThemeContext, {themes} from './Components/utils/theme'

function App() {
  const [theme, setTheme] = useState(themes.light)
  const handleChangeTheme = () =>{
    if(theme === themes.dark) setTheme(themes.light)
    if(theme === themes.light) setTheme(themes.dark)
  }

  return (
    <>
    <ThemeContext.Provider value={{theme, handleChangeTheme}}>
    <Routes>
      <>
        <Route path='/' element={<Layout/>}>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.contact} element={<Contact/>}/> 
          <Route path={routes.detail} element={<Detail/>}/>
          <Route path={routes.favs} element={<Favs/>}/>
        </Route>
      </>
    </Routes>
    </ThemeContext.Provider>
  </>
  );
}

export default App