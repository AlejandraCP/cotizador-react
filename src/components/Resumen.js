import React, { Component } from 'react'
import Resultado from './Resultado';
import {primeraMayuscula} from './../Helper'

class Resumen extends Component {

    mostrarResumen =() => {
        const {marca, plan, year} = this.props.datos;
        if(!marca || !plan || !year) return null
        return(
            <div>
                <h1>Resumen de cotización</h1>
                <p>Marca: {primeraMayuscula(marca)}</p>
                <p>Plan: {primeraMayuscula(plan)}</p>
                <p>Año: {primeraMayuscula(year)}</p>
            </div>
        )
    }
    render() {  
        return (
            <div className='text-center'>
                <div>
                    {this.mostrarResumen()}
                </div>
                <div>
                    <Resultado resultado={this.props.resultado}/>  
                </div>
            </div>

        )
    }
}

export default Resumen;