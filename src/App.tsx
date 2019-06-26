import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  return (
    <div className="App">
      
      <h1>Apartamentos favoritos</h1>
      
      <div className="listagem-cards">
      
        <div className="card-apartamento">
          <img alt="Imagem do apartamento" src={logo} className="App-logo"></img>
          <div className="texto-card">
            <h2>Título do apartamento</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quae distinctio eveniet temporibus architecto quis reiciendis harum quas similique officiis fugit rem, enim quaerat repellat illum deserunt dolores, molestias ut.
            </p>
          </div>
        </div>  
          
        <div className="card-apartamento">
        <img alt="Imagem do apartamento" src={logo} className="App-logo"></img>
          <div className="texto-card">
            <h2>Título do apartamento</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quae distinctio eveniet temporibus architecto quis reiciendis harum quas similique officiis fugit rem, enim quaerat repellat illum deserunt dolores, molestias ut.
            </p>
          </div>
        </div>
      
      </div>

    </div>
  );
}

export default App;
