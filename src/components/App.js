import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {

  cotizarSeguroMet = (datosAuto) => {

    // aplicando destructutirng
    const {marca, plan, año}= datosAuto;
    console.log(plan);
    
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
