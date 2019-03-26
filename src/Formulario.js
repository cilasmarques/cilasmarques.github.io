import React, {Component} from 'react';

export default class extends Component{

    constructor(){
        super();
        this.state = {
            valorDoBotao: "Enviar formulario"
        };
    };

    _mudarValorDoBotao () {
        this.setState({
            valorDoBotao: "Nao enviar Fomulario"
        })
    }

    _voltarValorDoBotao () {
        this.setState({
            valorDoBotao: "Enviar Fomulario"
        })
    }

    render(){
        return (
            <form>
                <input type="text" placeholder={this.props.placeHolderDoInput} />
                <button onMouseOut={() => this._voltarValorDoBotao()}
                onMouseOver={() => this._mudarValorDoBotao()}>
                    {this.state.valorDoBotao} 
                </button>
            </form>
        );
    };
};