import { useEffect } from "react";
import { useReducer } from "react";
import { createContext, useContext, useState } from "react";

export const initialState = {
  theme: 'light',
  data: [],
  doctor: {}, 
  favs: JSON.parse(localStorage.getItem('favs')) || []
}


const initialFavs = JSON.parse(localStorage.getItem('favs')) || []

export const ContextGlobal = createContext();
export const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    const reducer = (state, action) => {
    switch(action.type){
      case 'GET_LIST':
          return {...state, data: action.doctor}
      case 'GET_DOC':
          return {...state, doctor: action.payload}
      // case 'ADD_FAV':
      //     return {...state, favs: [...state.favs, action.payload]}
      default: 
          throw new Error()
    }
    }
    const [search, setSearch] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)
    const[favs, setFavs] = useState(initialFavs)

    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(favs))
    }, [favs])

    const addFavs = (doctor) =>{
      const oldFavs = [...favs]
      const newFavs = oldFavs.concat(doctor)
      setFavs(newFavs)
    }

    const removeFavs = (id) => {
      const oldFavs = [...favs]
      const newFavs = oldFavs.filter((doctor)=> doctor.id !== id)
      setFavs(newFavs)
    }

    return (
      <ContextGlobal.Provider value={{
          search, setSearch,
          state, dispatch, 
          favs, addFavs, removeFavs
        }}>
          
          {children}
      </ContextGlobal.Provider>
    )
}

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)