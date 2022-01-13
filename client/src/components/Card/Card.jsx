import React from "react";
import a from './card.module.css'

export default function Card ({name, region, img}) {
    return (
        <div className={a.allCard}>
        <div className={a.card}>

            <div className={a.containerFlag}>
            <img src={img} alt="img not found" className={a.flag} />
            </div>
            <div className={a.name}>
            <h3>{name}</h3>
            </div>
            <div className={a.region}>
            <h3>{region}</h3>
            </div>
        </div>
        </div>
    )
}