import React from 'react';

import logo from './logo.svg';

import Card from './components/Card';

import './App.css';

export default class App extends React.Component < any, any >{

  constructor(props: any) {
    super(props);

    this.state = {
      apartamentos: [
        {
          title: "Apartamento 1",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, iure commodi animi impedit corporis laudantium inventore excepturi consequatur eos aliquam ipsum doloremque corrupti, atque illum error debitis dicta dignissimos cum! ",
          logo: logo
        },
        {
          title: "Apartamento 2",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, iure commodi animi impedit corporis laudantium inventore excepturi consequatur eos aliquam ipsum doloremque corrupti, atque illum error debitis dicta dignissimos cum! ",
          logo: logo
        },
        {
          title: "Casa do Vinicoi",
          description: "Descrição do apartamento do vinicoi",
          logo: logo
        }
      ]

    };


  }

  render() {

    const { apartamentos } = this.state;

    return (
      <div className="App">
        
        <h1>Apartamentos favoritos</h1>
        
        <div className="listagem-cards">
        
          {apartamentos.map(function (apartamento: any) {
            return (
              <Card title={apartamento.title} description={apartamento.description} logo={apartamento.logo}/>
            );
          })}
           
            
        </div>
  
      </div>
    );
  }


  
}


