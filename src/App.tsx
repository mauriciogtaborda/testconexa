import React from 'react';
import './App.css';
import ListOfCharacter from './components/ListOfCharacter';
import ListOfEpisodes from './components/ListOfEpisodes';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <section className='row'>
        <div className='character1'>
          <h1>Character #1</h1>
          <ListOfCharacter />
        </div>
        <Pagination />
        <div className='character2'>
        <h1>Character #2</h1>
          <ListOfCharacter />
        </div>
      </section>
      <section className='row'>
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
      </section>
    </div>
  );
}

export default App;
