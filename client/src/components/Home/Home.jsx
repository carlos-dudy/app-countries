import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card'
import { getCountries, filterByRegion, orderByName,
    orderByPopulation } from '../../actions/index.js';
import Styles from './home.module.css'
import Paginado from '../Paging/Paging.jsx'
import SearchCountry from '../SearchCountry/Searchcountry'
import CountryDetail from '../CountryDetail/CountryDetail';
 
export default function Home() {

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    const [currentPage, setCurrentPage] = useState(1)
    const [orden, setOrden ] = useState('')
    const [countriesPage, setCountriesPage ] = useState(10)
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
    
    function handleSort (e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleSortPopulation (e){
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };



    return (
        <div className={Styles.cointener}>
            <h1>Countries</h1>
            <SearchCountry/> 
                <select  onChange={(e) => {handleSortPopulation(e)}}>
                {/* <option value='Pobla'>Poblacion</option> */}
                    <option value='ASC'>Ascendente</option>
                    <option value='DES'>Descendente</option>
                </select>

                <div>
                <select onChange={e => handleFilterByRegion(e)}>
                <option value='Continente'>Continente</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Americas'>America</option>
                    <option value='Africa'>Africa</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europa</option>
                    <option value='All'>All</option>
                </select>
                </div>
                <select onChange={e => handleSort(e)}>
                {/* <option value='Orden'>Orden Alfabetico</option> */}
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
            <nav className={Styles.navigation}>  
                <button onClick={handleClick}>
                    Cargar Todos los Paises
                </button>
                <Link to='/activity'><button className={Styles.Button} >Crear Actividad a Paises</button></Link>
            </nav>
            <div className={Styles.cards}>
                {currentCountries?.map(country => {
                    return (
                        <Link key={country.name} to={'/countries/' + country.id}>
                            <Card name={country.name} region={country.region} img={country.flag} />
                        </Link>
                    )
                })}
            </div>
                {/* <CountryDetail/> */}

            {/* <div className={Styles.sectionCountries}>
                      {currentCountries ? currentCountries.map(c => {
                                return <CountryDetail key={c.id} country={c} />
                            }) :<p>No existen paises</p>}
                    </div> */}

    
            <Paginado className={Styles.paginado}
                countriesPage={countriesPage}
                allCountries={allCountries.length}
                paginado={paginado}/>
        </div>
    )
}