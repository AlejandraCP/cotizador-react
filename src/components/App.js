import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header titulo='Cotizador de seguro de autos'/>
        <Formulario/>
      </div>
    );
  }
}

export default App;
