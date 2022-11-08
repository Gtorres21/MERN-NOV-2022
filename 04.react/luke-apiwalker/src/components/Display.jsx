import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Display = (props) => {

    const [starwars, setStarwars] = useState(null)
    const {x,y} = useParams();



    useEffect(() => {
        axios.get("https://swapi.dev/api/"+ x +"/"+ y)
        .then((res) =>{
            console.log(res.data);
            setStarwars(res.data);
        })
        .catch(err=>console.log(err))
    }, [x,y]);



    return (
        <div>
            
            {
                starwars ? (
                    x === 'planets'? (
                        <div>
                            <h2>{starwars.name}</h2>
                            <h4>Climate: {starwars.climate}</h4>
                            <h4>Terrain: {starwars.terrain}</h4>
                            <h4>Surface Water: {starwars.surface_water}</h4>
                            <h4>Population: {starwars.population}</h4>
                        </div>
                    )
                    :( <div>
                        <h2> {starwars.name} </h2>
                        <h4>Height: {starwars.height}</h4>
                        <h4>Mass: {starwars.mass}</h4>
                        <h4>Hair Color: {starwars.hair_color}</h4>
                        <h4>Skin Color: {starwars.skin_color}</h4>
                    </div>
                ) )
                : (
                <div>
                    <p>These aren't the droids you're looking for</p> 
                    <img src="https://www.hasbro.com/common/productimages/en_US/8D4152CA02144A6481F17091FBC6FFF1/d99d3a31e3cbc0fd47c5c94a73088469415c2e5b.jpg" alt="" />
                </div>
                )
            }



        </div>
    )
}

export default Display