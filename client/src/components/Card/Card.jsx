import React from "react";
import Styles from './card.module.css'

export default function Card ({name, region, img}) {
    return (
        <div className={Styles.card}>
            <img src={img} alt="img not found" />
            <h3>{name}</h3>
            <h3>{region}</h3>
        </div>
    )
}