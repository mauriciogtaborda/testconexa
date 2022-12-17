import React, { Dispatch, SetStateAction } from 'react';
import { Character } from '../App';


interface CardProps {
  character : Character;
  onclick: Dispatch<SetStateAction<Character | null>>;
}

function Card({character, onclick}: CardProps) {
  return (
    <div className="Card" onClick={() => onclick(character)}>
      <img src={character.image} alt={character.name} />
      {character.name}
      {character.status} - {character.species}

    </div>
  );
}

export default Card;
