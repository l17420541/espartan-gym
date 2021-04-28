import React, { Component } from 'react'
import Presentador from './Presentador'
import Videos from './Videos'
import Products from './Products'
import Contact from './Contact'
import Ubicacion from './Ubicacion'

export class Body extends Component {
    render() {
        return (
            <div className="body-content">
                <div className="presentador">
                    <Presentador />
                </div>
                <div className="videos bg-dark pt-4 pb-4">
                    <Videos />
                </div>
                <div className="productos bg-dark">
                    <Products />
                </div>
                <div className="contact bg-dark">
                    <Contact />
                </div>
                <div className="ubicacion bg-dark">
                    <Ubicacion />
                </div>
            </div>
        )
    }
}

export default Body
