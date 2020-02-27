import React from 'react';
import './styles/global.css';
import './contador.css'

class App extends React.Component {
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

export default App;


//ou 

// import React from 'react';

// export default class App extends React.Component{
//   render(){
//     return <h1>Olá Mundo</h1>;
//   }
// }

