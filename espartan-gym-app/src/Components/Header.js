import React, { Component } from 'react'
import Menu from './Menu'

export class Header extends Component {
    render() {
        return (
            <div className="header-content">
                <Menu />
            </div>
        )
    }
}

export default Header
