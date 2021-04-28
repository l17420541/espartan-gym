import React from 'react'
import Prod from './Prod'
import CardDeck from 'react-bootstrap/CardDeck'
import img1 from '../Assets/Producto1.jpg'
import img2 from '../Assets/Producto2.jpg'
import img3 from '../Assets/Producto3.jpg'

const prods=[
    {
        id:1,
        title:'Cellucor C4',
        image:img1,
        text:'fshbdfjsdhfbgsdfg',
        imageURL:'URL prod 1'
    },
    {
        id:2,
        title:'Lipo 6 BLACK',
        image:img2,
        text:'fshbdfjsdhfbgsdfgsdfasdfasdf',
        imageURL:'URL prod 2'
    },
    {
        id:3,
        title:'XTEND BCAAS',
        image:img3,
        text:'fshbdfjsdhfbgsdfgafasdgfthdrthdrth',
        imageURL:'URL prod 3'
    }
]

function Products() {
    return (
        <div className="container">
            <h3 className="text-light">Tenemos a la venta los mejores suplementos.</h3>
            <br></br>
            <CardDeck>
                {
                    prods.map(prod => (
                        <div className="col-md-4" key={prod.id}>
                            <Prod title={prod.title} image={prod.image} text={prod.text} imageURL={prod.imageURL}/>
                        </div>
                    ))
                }
            </CardDeck>
            <br></br>
            
            
        </div>
    )
}

export default Products
