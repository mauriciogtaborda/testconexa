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
  const [api, setApi] = useState<string>('https://rickandmortyapi.com/api/character/')
  const [info, setInfo] = useState<Info | null>(null)
  const [character1, setCharacter1] = useState<Character | null>(null)
  const [character2, setCharacter2] = useState<Character | null>(null)
  const [list, setList] = useState([])
  useEffect(() => {
    fetch(api).then(res=> res.json()).then(data => {
      console.log(data)
      setInfo(data.info)
      setList(data.results)
    })
  }, [api]);
  
  return (
    <div className="App">
      <section className='row'>
        <div className='character1'>
          <h1>{character1 && character1.name}</h1>
        </div>
        <Pagination info={info} changePage={setApi} />
        <div className='character2'>
        <h1>{character2 && character2.name}</h1>
        </div>
      </section>
      <section className='row'>
        <ListOfCharacter list={list.slice(0,10)} onclick={setCharacter1} selected={character1} />
        <ListOfCharacter list={list.slice(10,20)} onclick={setCharacter2} selected={character2} />
      </section>
      {character1 && character2 && <section className='row table'>
        <div className='episodes1'>
          <h1>{character1.name} episodes</h1>
          <ListOfEpisodes episodes={[]} />
        </div>
        <div className='episodesboth'>
          <h1>{character1.name} | {character2.name} episodes</h1>
          <ListOfEpisodes episodes={[]} />
        </div>
        <div className='episodes2'>
        <h1>{character2.name} episodes</h1>
          <ListOfEpisodes episodes={[]} />
          </div>
      </section>}
    </div>
  );
}

export default App;
