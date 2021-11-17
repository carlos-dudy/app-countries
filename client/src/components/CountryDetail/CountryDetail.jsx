import { Link } from "react-router-dom"
import Styles from './countrydetail.module.css'
import React from 'react'
import {getCountriesById} from  '../../actions/index.js';


export default function CountryDetail({country}){


    return(


        <div className={Styles.card}>
            <h2 className={Styles.name}>NOMBRE: {Styles.name}</h2>
            <h3> CONTINENTE: {country.region}</h3>
            <h4>POBLACION: {country.population}</h4>
            <img src={country.flag} alt='Flag Country'
            className={Styles.flag}/>
        </div>
    
    )
}