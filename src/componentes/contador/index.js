import React, { Component } from 'react';
import './contador.css';

class Contador extends Component {

    state = {
        numero: 0
    }

    aumentar = () => {
        let novoNumero = this.state.numero;
        novoNumero++;
        this.setState({ numero: novoNumero });
    }

    diminuir = () => {
        let novoNumero = this.state.numero;
        if (novoNumero === 0) {
            return alert("Hoje não Faro");
        } else {
            novoNumero--;
            this.setState({ numero: novoNumero });
        }
    }


    render() {
        return (
            <div>
                <h1 className="contador-titulo">
                    {this.state.numero}
                </h1>
                <button type="button" className="contador-aumentar" onClick={this.aumentar}>Aumentar</button>
                <button type="button" className="contador-diminuir" onClick={this.diminuir}>Diminuir</button>
            </div>

        );
    }

}

export default Contador;