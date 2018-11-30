import React, { Component } from 'react'

class Resultado extends Component {

    mostrarChosse = () => {
        const resultado = this.props.resultado
        const mensaje = (!resultado) ? 'Elige Marca, Año y tipo de seguro' : 'El total es: '
            return (
                <div>
                    <span>{mensaje}</span>
                    <span>{resultado}</span>
                </div>
            )
        }
    render() {
        return (
            <div>
                {this.mostrarChosse()}
            </div>
        )
    }
}

export default Resultado;