import '../styles/pokecard.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokecard = ( { url } ) => {

    const [ pokemon, setPokemon ] = useState({});

    useEffect ( () => {
        axios.get(url).then( res => setPokemon( res.data ))
    },[])

    return (
        <div className={`pokecardBack ${pokemon.types?.[0].type?.name}`}>
            <figure>
                <img src={`/animated/normal/${pokemon.id ? pokemon.id : 0}.gif`} />
            </figure>
            <span>{pokemon.name}</span>
        </div>
    );
};

export default Pokecard;