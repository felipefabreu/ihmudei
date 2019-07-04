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
            <div className="card apartamento-card ">
                
                <img alt="Imagem do apartamento" src={this.state.logo} className="card-img-top"></img>
                
                <div className="card-body">
                    <h5 className="card-title" >{this.state.title}</h5>
                    <p className="card-text">
                        {this.state.description}
                    </p>
                </div>
                

                
            </div> 
        );
    }


}

