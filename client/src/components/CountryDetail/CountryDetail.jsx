import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from "react-router-dom"
import a from './countrydetail.module.css'
import Wold from '../Imagenes/woldNav.jpg'
import { getCountryById } from '../../actions/index.js';

export default function CountryDetail() {
    const dispatch = useDispatch();
    const [state, setState] = useState({});
    const info = useSelector(store => store.countryDetail);
    const {id} = useParams();
 console.log(id, "Id del pais")

 const getDetails = () => {
    if (Object.keys(state).length === 0) dispatch( getCountryById(id))
}

useEffect(() => {
    getDetails();
    return () => { 
    setState({})}
}, [])
    return (
        <div className={a.container}>
        <div className={a.nav}>
            <div className={a.wold}>
                
                <Link   to='/countries'>
                    <img className={a.imgNav} src={Wold} alt='img' />
                </Link>
            
                </div>

                <div className={a.title}>
                    <h1>Mas info de {info.name}</h1>
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