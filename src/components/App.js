import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import '../styles/index.css';

const App = () => {
  return (
    <div className='App'>
      <h1 className='text-uppercase'>Super Squad</h1>
      <div className='col-md-6'>
        <CharacterList />
      </div>
      <div className='col-md-6'>
        <HeroList />
      </div>
    </div>
  );
};

export default App;

// <div className='col-md-6'>
//   <SquadStats />
// </div>
