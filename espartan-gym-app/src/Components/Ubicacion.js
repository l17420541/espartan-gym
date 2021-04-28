import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import img4 from '../Assets/img4.PNG'

export class Ubicacion extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-light">Ubicación:</h3>
                <br></br>
                <Image src={img4} fluid />
            </div>
        )
    }
}

export default Ubicacion
