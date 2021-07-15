import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <ul className="header-nav">
            <Link to='/' className="nav-element">Strona Główna</Link>
            <Link to='/shop' className="nav-element">Sklep Online</Link>
            <Link to='' className="nav-element">O nas</Link>
            <Link to='' className="nav-element">Kontakt</Link>
         </ul>
    )
}

export default NavBar