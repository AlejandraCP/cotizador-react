import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './../Helper';

class App extends Component {

  cotizarSeguroMet = (datosAuto) => {

    // aplicando destructutirng
    const {marca, plan, year}= datosAuto;

    let diferenciaAnio = obtenerDiferenciaAnio(year)

    // precio base
    let resultado = 2000;

    // el resultado disminuye en 3% por cada año inferior
    resultado -= ((diferenciaAnio * 3) * resultado) / 100;

    // calcular resultado según marca
    resultado = calcularMarca(marca) * resultado;

    // según el plan el resultado debe aumentar
    let choosePlan = obtenerPlan(plan);

    resultado = choosePlan * resultado;
    console.log(resultado);
    
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
