import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {

  cotizarSeguroMet = (datosAuto) => {
    console.log(datosAuto.year);
    
  }
  render() {

    return (
      <div className="App">
        <Header titulo='Cotizador de seguro de autos'/>
        <Formulario
          cotizarSeguroProps={this.cotizarSeguroMet}        
        />
      </div>
    );
  }
}

export default App;
