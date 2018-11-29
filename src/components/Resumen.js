import React, { Component } from 'react'

class Resumen extends Component {
    render() {
        const {marca, plan, year} = this.props.datos;
        return (
            <div>
                <p>{marca}</p>
            </div>
        )
    }
}

export default Resumen;