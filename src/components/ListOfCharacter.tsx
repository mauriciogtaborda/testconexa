import React, { Dispatch, SetStateAction } from 'react';
import { Character } from '../App';
import Card from './Card';

interface ListOfCharacterProps {
  list: Character[];
  onclick: Dispatch<SetStateAction<Character | null>>;
}

function ListOfCharacter({list, onclick}: ListOfCharacterProps) {
  return (
    <div className="row">
      {list && list.map((character: Character) =><Card onclick={onclick} character={character} /> )}
    </div>
  );
}

export default ListOfCharacter;
