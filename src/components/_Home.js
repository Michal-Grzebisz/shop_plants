import React from 'react'
import NavBar from './_NavBar.js'

const Home = () => {

    return (
        <>
            <header className='header'>
                <div className="header_container container">
                    <span className="logo">Logo</span>
                    <NavBar />
                </div>
            </header>
        </>
    )
}

export default Home