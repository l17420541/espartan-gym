import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';

function Prod({title,image,text,imageURL}) {
    return (
        <div>
            <Card className="text-center bg-dark">
                <Card.Img variant="top" src={image} />
                <Card.Body className="text-light">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button variant="outline-warning" href={imageURL} target="_blank">Ver más</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

Prod.propTypes={
    title:PropTypes.string.isRequired,
    image:PropTypes.string,
    imageURL:PropTypes.string,
    text:PropTypes.string
}

export default Prod
