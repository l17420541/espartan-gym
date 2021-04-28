import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../Assets/img1v2.png'
import img2 from '../Assets/img2v2.png'
import img3 from '../Assets/img3v2.png'

export class Presentador extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>¡Visítanos!</h3>
                            <p>Contamos con entrenadores muy capacitados y nuestro propio nutriólogo.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Esparta Gym</h3>
                            <p>Somos especialistas en culturismo dispuestos a enfrentar cualquier reto. ¿Te atreves a intentar convertirte en un guerrero?</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Gimnasio/Centro de fitness</h3>
                            <p>En Esparta Gym estamos mejorando día con día para brindarte el mejor servicio.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Presentador
