import React, {useState} from 'react';
import axios from 'axios';

const PokemonApi = (props) => {

    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
            console.log(response.data);
            setPokemonList(response.data.results);
        })
        .catch(err => {
            console.log(err);
        }); 
    };

    return (
        <>
            <p><button onClick={getPokemon}>Fetch Pokemon</button></p>
            {
                pokemonList.map((pokemonObj, i) => {
                    return (
                        <div key={i}>
                            <h3>{pokemonObj.name}</h3>
                        </div>
                    )
                })
            }
        </>
    )
};

export default PokemonApi;