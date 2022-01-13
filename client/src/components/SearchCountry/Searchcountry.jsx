import React from 'react';
import {useState} from 'react';
import { useDispatch} from 'react-redux';
import { getCountryByName } from '../../actions';
import { FiSearch } from "react-icons/fi";
import Styles from './searchcountry.module.css'

export default function SearchCountry(){
    const dispatch = useDispatch()
    const [name, setName]= useState('')

    function hadleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    
    function hadleSumit(e){
        e.preventDefault()
        dispatch(getCountryByName(name))
    }

    return (
        <div className={Styles.searchBar}>
        <input className={Styles.input}
        type = "text"
        placeholder = "Buscar..."
        onChange={e => hadleInputChange(e)}
        />
        <button className={Styles.btn} type ="submit" onClick={(e) => hadleSumit(e)}><FiSearch/></button>
        </div>

    )
}