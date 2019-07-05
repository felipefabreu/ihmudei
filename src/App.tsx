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
          title: "Apartamento 1",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, iure commodi animi impedit corporis laudantium inventore excepturi consequatur eos aliquam ipsum doloremque corrupti, atque illum error debitis dicta dignissimos cum! ",
          logo: logo
        },{
          title: "Apartamento 1",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, iure commodi animi impedit corporis laudantium inventore excepturi consequatur eos aliquam ipsum doloremque corrupti, atque illum error debitis dicta dignissimos cum! ",
          logo: logo
        },{
          title: "Apartamento 1",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, iure commodi animi impedit corporis laudantium inventore excepturi consequatur eos aliquam ipsum doloremque corrupti, atque illum error debitis dicta dignissimos cum! ",
          logo: logo
        },{
          title: "Apartamento 1",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, iure commodi animi impedit corporis laudantium inventore excepturi consequatur eos aliquam ipsum doloremque corrupti, atque illum error debitis dicta dignissimos cum! ",
          logo: logo
        },{
          title: "Apartamento 1",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, iure commodi animi impedit corporis laudantium inventore excepturi consequatur eos aliquam ipsum doloremque corrupti, atque illum error debitis dicta dignissimos cum! ",
          logo: logo
        },{
          title: "Apartamento 1",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, iure commodi animi impedit corporis laudantium inventore excepturi consequatur eos aliquam ipsum doloremque corrupti, atque illum error debitis dicta dignissimos cum! ",
          logo: logo
        },
        
      ]

    };


  }

  render() {

    const { apartamentos } = this.state;

    return (
      <div className="App">
        
        <div className="app-form">
          <h1>Novo apartamento</h1>

          <form className="form-apartamento">
            <div className="form-group app-form-group">
              <label htmlFor="formGroupTitulo" >Título</label>
              <input type="text" className="form-control" id="form-titulo" placeholder="Título" ></input>
            </div>
            <div className="form-group app-form-group">
              <label htmlFor="formGroupDescricao" >Descrição</label>
              <input type="text" className="form-control" id="form-descricao" placeholder="Descrição do apartamento"></input>
            </div>
            <div className="form-group app-form-buttons">
              <button className="btn btn-limpar" >Limpar</button>
              <button className="btn btn-adicionar " >Adicionar</button>
            </div>
          </form>
            

        </div>

        <div className="app-favoritos">
          <h1>Apartamentos favoritos</h1>
        
          <div className="listagem-cards">
          
            {apartamentos.map(function (apartamento: any) {
              return (
                <Card title={apartamento.title} description={apartamento.description} logo={apartamento.logo}/>
              );
            })}
            
            
          </div>
        </div>
  
      </div>
    );
  }


  
}


