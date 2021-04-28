import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'

export class Videos extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h3 className="text-light">Entrena con nuestras rutinas.</h3>
                    <br></br>
                    <CardDeck>
                        <Card>
                            <iframe src="https://www.youtube.com/embed/WDAXj5CU4qc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card>
                        <Card>
                            <iframe src="https://www.youtube.com/embed/fRy5o_tplGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card>
                        <Card>
                            <iframe src="https://www.youtube.com/embed/tMapcv_OYhw?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Card>
                    </CardDeck>
                </Container>

            </div>
        )
    }
}

export default Videos
