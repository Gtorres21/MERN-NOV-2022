import React, { useState }from 'react';
import axios from 'axios';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])


    // Axios
    const axPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then((res) => {
            console.log(res.data.results)
            setPokemon(res.data.results)
        })
        .catch(err => console.log(err))
    }



    return (
        <>
            <button onClick={axPokemon}>Fetch Pokemon</button>
            <br/> 

                {

                    pokemon.map((poke, idx) => {
                        return (
                            <div key={idx}>
                                <p>{idx +1} {poke.name}</p>

                            </div>
                        
                        
                    )
                        })
                }
        </>
    )
}

export default Pokemon