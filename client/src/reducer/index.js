import {
    GET_COUNTRIES, FILTER_BY_REGION, GET_COUNTRY_BY_NAME, ORDER_BY_NAME,
    SORT_BY_POPULATION, ACTIVITY_FILTER, GET_ALL_ACTIVITIES,GET_COUNTRY_BY_ID
} from "../actions/constants.js";

const initialState = {
    countries: [],
    allCountries: [],
    countryDetail: {},
    allActivities: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES: //Traer todos los paises
            return {
                ...state,
                countries: action.payload, //trae todos los paises
                allCountries: action.payload //Hago una copia de todos los personajes
            }

        case FILTER_BY_REGION: // filtrar por Continente
            const allCountries = state.allCountries
            const statusFiltered = (action.payload === "All") ?
             allCountries : allCountries.filter(el => el.continent === action.payload)
             console.log(action.payload)
            return {
                ...state,
                countries: statusFiltered
            }

        case GET_COUNTRY_BY_NAME: //Traer Pais por nombre
            {
                return {
                    ...state,
                    countries: action.payload
                }
            }
        case GET_COUNTRY_BY_ID: 
        {
            return {
                ...state,
                countryDetail: action.payload
            }
        }
        case ORDER_BY_NAME: // Ordenanar por orden alfabetico
        { 
            let sortArr = action.payload === 'A-Z'|| 'Pobla' ? state.countries.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
            }) :
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                countries: sortArr
            }
        }
        case SORT_BY_POPULATION: //Ordenar por Poblacion
            {
                let sortPopulation = action.payload === 'ASC' || 'Orden' ? state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1;
                    }
                    return 0;
                }) :
                    state.countries.sort(function (a, b) {
                        if (a.population > b.population) {
                            return -1;
                        }
                        if (b.population > a.population) {
                            return 1
                        }
                        return 0
                    })
                return {
                    ...state,
                    countries: sortPopulation
                }
            }
        case ACTIVITY_FILTER: 
        {
            const countryActivity = state.allActivities.filter(act=>
                  act.name === action.payload)[0].countries.map(countryAct => countryAct)
            //retorna los datos del pais donde se puede realizar esa actividad
            return {
                ...state,
                countriesFiltered: countryActivity
            }
        }
        case GET_ALL_ACTIVITIES: 
        {
            return {
                ...state,
                allActivities: action.payload
            }
        }
        default:
            return state;
    };
}
export default rootReducer;