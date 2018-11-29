import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './../Helper';
import Resumen from './Resumen';
import Resultado from './Resultado';

class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

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

    datosAuto = {
      marca: marca,
      plan: plan,
      year: year
    }

    this.setState({
      resultado: parseFloat(resultado).toFixed(2) ,
      datos: datosAuto
    })
  }
  render() {

    return (
      <div className="App">
        <Header titulo='Cotizador de seguro de autos'/>
        <Formulario
          cotizarSeguroProps={this.cotizarSeguroMet}        
        />
        <Resumen datos={this.state.datos}/>
        <Resultado datos={this.state.datos}/>
      </div>
    );
  }
}

export default App;
