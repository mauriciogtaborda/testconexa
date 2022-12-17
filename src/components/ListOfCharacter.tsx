import React, { Dispatch, SetStateAction, useState } from 'react';
import { Character } from '../App';
import Card from './Card';

interface ListOfCharacterProps {
  list: Character[];
  onclick: Dispatch<SetStateAction<Character | null>>;
  selected: Character | null;
}

function ListOfCharacter({list, onclick, selected}: ListOfCharacterProps) {
  return (
    <div className="row flex">
      {list && list.map((character: Character) =><Card onclick={onclick} character={character} selected={selected} /> )}
    </div>
  );
}

export default ListOfCharacter;
