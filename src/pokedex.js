import React from "react";
import Pokecard from "./pokecard";

const Pokedex = (props) => {
    return (
        <div className="pokedex">
            {props.pokemon.map((poke) => (
                <Pokecard key={poke.id} pokemon={poke} />
            ))}
        </div>
    );
};

export default Pokedex;