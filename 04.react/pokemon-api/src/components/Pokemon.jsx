import React, { useState } from 'react'


const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=808&offset=0")
        .then((res) => {
            // console.log(res.json())
            return res.json();
        })
        .then((res) => {
            console.log(res.results)

            setPokemon(res.results)
        })
        .catch((serverErrorObj)=>{
            console.log("*******ERROR******", serverErrorObj)
        })
    }


    return (
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <hr/>
            <div>
                {
                    pokemon.map((poke, idx) =>{
                        return (
                            <div key={idx}>
                                <h4>{idx+1} {poke.name}</h4>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    );
}

export default Pokemon