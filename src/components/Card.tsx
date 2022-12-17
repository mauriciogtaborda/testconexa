import React, { Dispatch, SetStateAction } from 'react';
import { Character } from '../App';


interface CardProps {
  character : Character;
  onclick: Dispatch<SetStateAction<Character | null>>;
  selected: Character | null;
}

function Card({character, onclick, selected}: CardProps) {
  return (
    <div className={`Card ${character === selected && 'selected'}`} onClick={() => onclick(character)}>
      <img src={character.image} alt={character.name} />
      <div className='description'>
        <h1>{character.name}</h1>
        <p>{character.status} - {character.species}</p>
      </div>

    </div>
  );
}

export default Card;
