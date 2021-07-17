import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <ul className="header_nav">
            <Link to='/' className="nav_element">Strona Główna</Link>
            <Link to='/shop' className="nav_element">Sklep Online</Link>
            <Link to='' className="nav_element">O nas</Link>
            <Link to='' className="nav_element">Kontakt</Link>
         </ul>
    )
}

export default NavBar