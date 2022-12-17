import React, { useEffect, useState } from 'react';
import './App.css';
import ListOfCharacter from './components/ListOfCharacter';
import ListOfEpisodes from './components/ListOfEpisodes';
import Pagination from './components/Pagination';

export interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  type:string;
  episode: string[];
  image: string;
}

export interface Info {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
}

function App() {
  const [info, setInfo] = useState<Info | null>(null)
  const [character1, setCharacter1] = useState<Character | null>(null)
  const [character2, setCharacter2] = useState<Character | null>(null)
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/').then(res=> res.json()).then(data => {
      console.log(data)
      setInfo(data.info)
      setList(data.results)
    })
  }, []);
  
  return (
    <div className="App">
      <section className='row'>
        <div className='character1'>
          <h1>{character1 && character1.name}</h1>
          <ListOfCharacter list={list} onclick={setCharacter1} />
        </div>
        <Pagination info={info} />
        <div className='character2'>
        <h1>{character2 && character2.name}</h1>
        <ListOfCharacter list={list} onclick={setCharacter2} />
        </div>
      </section>
      {character1 && character2 && <section className='row'>
        <div className='episodes1'>
          <h1>Character #1</h1>
          <ListOfEpisodes />
        </div>
        <div className='episodesboth'>
          <h1>Character #1</h1>
          <ListOfEpisodes />
        </div>
        <div className='episodes2'>
        <h1>Character #2</h1>
          <ListOfEpisodes />
          </div>
      </section>}
    </div>
  );
}

export default App;
