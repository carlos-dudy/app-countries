import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './landing.module.css'

export default function Landing() {
    return (
        <div className={Styles.landing}>
            <div className={Styles.title}>
                <h1>Mi COUNTRIES APP </h1>
            </div>

            <div className={Styles.botton}>
                <Link to='/countries'>
                    <button>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}