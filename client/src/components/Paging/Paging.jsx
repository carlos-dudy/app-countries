import React from 'react';
import Styles from './paging.module.css'

export default function Paginado({ countriesPage, allCountries, paginado }) {
    const pageNumber = []

    for (let i = 0 ; i < Math.ceil(allCountries/countriesPage); i++) {
        pageNumber.push(i+1)
    }

    return (
        <nav>
            <ul className= {Styles.pagination}>
                { pageNumber &&
                    pageNumber.map(number => (
                    <div className={Styles.number} key={number}>
                        <button className={Styles.button} onClick={() => paginado(number)}>{number}</button>
                    </div>
                ))}
            </ul>
        </nav>
    )
}