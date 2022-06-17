import { useState } from "react";
import { useEffect } from "react";
import Pokemon from './Pokemon.jsx'

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

    useEffect(()=> {
      fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {setPokemons(data.results);
        
        // console.log("pokemonai yra:", data);
      });
    }, []) 



    return (
      <div>
        Pokemons
        {pokemons.map((poke, i) => <Pokemon key={i} name={poke.name} urlas={poke.url}/>)}
      </div>
    )
  };

export default Pokemons;
