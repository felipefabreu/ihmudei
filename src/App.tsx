import React from 'react';

import Card from './components/Card';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <h1>Apartamentos favoritos</h1>
      
      <div className="listagem-cards">
      
        <Card />
         
          
      </div>

    </div>
  );
}

export default App;
