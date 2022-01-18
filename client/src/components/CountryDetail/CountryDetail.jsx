import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { Link } from "react-router-dom"
import a from './countrydetail.module.css'
import Wold from '../Imagenes/woldNav.jpg'
import { getCountryById } from '../../actions/index.js';

export default function CountryDetail() {
    const dispatch = useDispatch();
    const [state, setState] = useState({});
    const info = useSelector(store => store.countryDetail);
    const {id} = useParams();
    const history = useHistory()


 const getDetails = () => {
    if (Object.keys(state).length === 0) dispatch(getCountryById(id))
}

useEffect(() => {
    getDetails();
    return () => { 
    setState({})}
}, [])

 function handleClick(e){
    e.preventDefault()
     history.push('/countries')
     setState({})
 }
    return (
        <div className={a.container}>
        <div className={a.nav}>
        
                <button className={a.woldNav} onClick={handleClick}>
                    <img className={a.imgNav} src={Wold} alt='img' />
                </button>
    
               

                <div className={a.title}>
                    <p className={a.titleName}> Mas info de {info.name}</p>
                </div>
                <div className={a.toActivity}>
                    <Link to='/activity'><button className={a.act} >Crear Actividad a Paises</button></Link>
                </div>

          
        </div>

        <div className={a.info}>
        <div className={a.gridIzq}>
        <div>
            <img className={a.flag} src={info.flags} alt="img flag"/>
        </div>
        </div>
        <div className={a.gridDer}>
        <div>
            <h1>Nombre: {info.name}</h1>
        </div>
        <div>
            <h1>Capital: {info.capital?info.capital : "sin datos"}</h1>
        </div>
        <div>
            <h1>Continente: {info.continent}</h1>
        </div>
        <div>
            <h1>Subregión: {info.subregion}</h1>
        </div>
        <div>
            <h1>Area: {info.area}</h1>
        </div>
        <div>
            <h1>Población: {info.population}</h1>
        </div>
        </div>
        </div>
        </div>
    )
}