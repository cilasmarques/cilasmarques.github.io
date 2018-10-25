import React, {Component} from 'react';
import Bloco from "./Galeria/Bloco";
import Assunto from "./Galeria/Assunto";

class Galeria extends Component {

    getListaCompAssunto = (listaAssuntos) => {

        const listaCompAssuntos = [];

        let CompAssunto;
        listaAssuntos.forEach((el, i) => {
            CompAssunto = <Assunto keyID={i+1} author={el["author"]} title={el["title"]} url={el["url"]}/>;

            listaCompAssuntos.push(CompAssunto);
        });

        return listaCompAssuntos;

    };


    getListaCompBloco = (data) => {

        const listaCompBlocos = [];

        let BlockComponent;

        for (let k in data) {

            BlockComponent = <Bloco title={k.charAt(0).toUpperCase() + k.slice(1, k.length).toLowerCase()}>
                                 {this.getListaCompAssunto(data[k])}
                             </Bloco>;

            listaCompBlocos.push(BlockComponent);

        }

        return listaCompBlocos;

    };

    render() {

        const data = this.props.data;

        return this.getListaCompBloco(data);

    }
}

export default Galeria;
