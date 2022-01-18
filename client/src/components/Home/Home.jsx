import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card'
import {
    getCountries, filterByRegion, orderByName,
    orderByPopulation
} from '../../actions/index.js';
import Styles from './home.module.css'
import Paginado from '../Paging/Paging.jsx'
import SearchCountry from '../SearchCountry/Searchcountry'
import CountryDetail from '../CountryDetail/CountryDetail';
import Wold from '../Imagenes/woldNav.jpg'
import { FiRefreshCw } from "react-icons/fi";

export default function Home() {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    const [currentPage, setCurrentPage] = useState(1)
    const [orden, setOrden] = useState('')
    const [countriesPage, setCountriesPage] = useState(10)
    const indexOfLastCountries = currentPage * countriesPage
    const indexOfFirstCountries = indexOfLastCountries - countriesPage
    const currentCountries = allCountries.slice(indexOfFirstCountries, indexOfLastCountries)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])

    function handleClick(e) { // me permite cargar todos los paises
        e.preventDefault();
        dispatch(getCountries());
    }
    function handleFilterByRegion(e) {
        dispatch(filterByRegion(e.target.value))
    }

    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleSortPopulation(e) {
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };



    return (
        <div className={Styles.cointener}>
            <div className={Styles.nav}>
                <Link to='/'>
                    <img className={Styles.imgNav} src={Wold} alt='img' />
                </Link>
                <SearchCountry />
                <select className={Styles.select} onChange={(e) => { handleSortPopulation(e) }}>
                    <option value='Pobla'>Poblacion</option>
                    <option value='ASC'>Ascendente</option>
                    <option value='DES'>Descendente</option>
                </select>


                <select className={Styles.select} onChange={e => handleFilterByRegion(e)}>
                    <option value='All'>Continente</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Americas'>America</option>
                    <option value='Africa'>Africa</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europa</option>
                </select>

                <select className={Styles.select} onChange={e => handleSort(e)}>
                    <option value='Orden'>Orden Alfabetico</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>

                <div className={Styles.recarga}>
                    <button className={Styles.refresh} onClick={handleClick}>
                        <FiRefreshCw />
                    </button>
                </div>
                <div className={Styles.toActivity}>
                    <Link to='/activity'><button className={Styles.act} >Crear Actividad a Paises</button></Link>
                </div>

            </div>
            <div className={Styles.cards}>
                <div className={Styles.allCards}>
                    {currentCountries?.map(country => {
                        return (
                            <Link key={country.name} to={'/countries/' + country.id}>
                                <Card name={country.name} region={country.continent} img={country.flags} />
                            </Link>
                        )
                    })}
                </div>
            </div>
          

            <Paginado className={Styles.paginado}
                countriesPage={countriesPage}
                allCountries={allCountries.length}
                paginado={paginado} />
        </div>
    )
}