import React from 'react';
import './pokecard.css';

const Pokecard = (props) => {
  const { id, name, type, base_experience } = props.pokemon;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokecard">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
};

export default Pokecard;