import React from 'react';
import { string } from 'prop-types';

export default class FormApartment extends React.Component<any, any> { 

    constructor(props: any) {
        super(props);

        this.state = {
            title: string,
            description: string,
        }

        this.handleOnchange = this.handleOnchange.bind(this);

    }

    public handleOnchange(event: any): void{
        
        this.setState({ name: event.target.value });

    }

    public submit(event: any) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {

        //onChange={ e => this.handleOnchange(e) }
        return (
            <div className="app-form">
                <h1>Novo apartamento</h1>

                <form className="form-apartamento">
                    <div className="form-group app-form-group">
                    <label htmlFor="formGroupTitulo" >Título</label>
                    <input type="text" name="title" onChange={ e => this.handleOnchange(e) } className="form-control" id="form-titulo" placeholder="Título" ></input>
                    </div>
                    <div className="form-group app-form-group">
                    <label htmlFor="formGroupDescricao" >Descrição</label>
                    <input type="text" name="description" onChange={ e => this.handleOnchange(e) } className="form-control" id="form-descricao" placeholder="Descrição do apartamento"></input>
                    </div>
                    <div className="form-group app-form-buttons">
                    <button className="btn btn-limpar" >Limpar</button>
                    <button className="btn btn-adicionar " onClick={e => this.submit(e)} >Adicionar</button>
                    </div>
                </form>

{/* 
                <h3>{this.state.title}</h3>
                <h4>{this.state.description}</h4> */}
            </div>
        );
    }

}