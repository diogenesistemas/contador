import React, { Component } from 'react';
import Contador from './componentes/contador'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';


class App extends Component {
  render() {
    return <Contador />
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

