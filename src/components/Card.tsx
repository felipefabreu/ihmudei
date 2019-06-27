import React from 'react';
import logo from '../logo.svg';


export default class Card extends React.Component < any, any > {

    constructor(props: any) {
        
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            logo: this.props.logo
        };

    }

    static defaultProps = {
        title: "Título",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos fugiat laborum illo unde cupiditate id voluptates ducimus debitis veritatis fuga ullam laudantium hic modi rerum, mollitia repellendus dolorem ad?",
        logo: logo
    }

    render() {
        return (
            <div className="card-apartamento">
                
                <img alt="Imagem do apartamento" src={this.state.logo} className="App-logo"></img>
                
                <div className="texto-card">
                    <h2>{this.state.title}</h2>
                    <p>
                        {this.state.description}
                    </p>
                </div>
                
            </div> 
        );
    }


}

