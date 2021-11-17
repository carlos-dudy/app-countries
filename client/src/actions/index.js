import {
GET_COUNTRIES, FILTER_BY_REGION, GET_COUNTRY_BY_NAME, ORDER_BY_NAME,
 SORT_BY_POPULATION, GET_ALL_ACTIVITIES, ACTIVITY_FILTER, 
 ADD_ACTIVITY_COUNTRY, GET_COUNTRY_BY_ID } from "./constants.js";
import axios from 'axios';


// traer paises de la base de DB
export function getCountries() {
    return async function (dispatch) {
        var countries = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        })
    }
}

// Filtrar Paises por Continente
export function filterByRegion(payload) {
    return {
        type: FILTER_BY_REGION,
        payload
    }
}

//Traer Pais por Nombre
export function getCountryByName(name) {
    return async function (dispatch) {
        try { 
            let countries = await axios.get('http://localhost:3001/countries?name=' + name);
            return dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: countries.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function getCountryById(idCountry){
    return async function(dispatch){
        let country = await axios.get(`http://localhost:3001/countries/${idCountry}`)
        return dispatch({
            type:GET_COUNTRY_BY_ID,
             payload:country.data})
    }
}

//Ordenar paises por orden Alfabetico
export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

// Ordenar por poblacion 
export function orderByPopulation(payload) {
    return {
        type: SORT_BY_POPULATION,
        payload
    }
}


// traer todas la actividades
export function getAllActivities(){
    return async function (dispatch){
        let activities = await axios.get('http://localhost:3001/activity')
        return dispatch
        ({type:GET_ALL_ACTIVITIES,
            payload:activities.data})
        }
    }
    
    // Filtrado por Actividades 
    export function activityFilter(payload){
       return{
           type:ACTIVITY_FILTER,
            payload}
    }
// Añadir actividad a pais
export function addActivityCountry(payload){
        return{
            type:ADD_ACTIVITY_COUNTRY,
             payload}
    }