import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from './loading';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        getPokemons: ( state, action ) => {
            const pokemons = action.payload;
            return pokemons;
        }
    }
})

export const getPokemonsThunk = (limit) => dispatch => {
    // dispatch( setLoading('loading') );
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
        .then( res => dispatch( getPokemons( res.data )))
        // .finally(() => dispatch( setLoading( '' )))
}

export const getPagesThunk = (url) => dispatch => {
    // dispatch( setLoading('loading') );
    axios.get(url)
        .then( res => dispatch( getPokemons( res.data )))
        // .finally(() => dispatch( setLoading( '' )))
}



export const { getPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;