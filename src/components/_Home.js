import React from 'react'
import NavBar from './_NavBar.js'
import BackgroundVideo from '../assets/background_video.mp4'


const Home = () => {

    return (
        <>
            <header className='header'>
                <video autoPlay loop muted>
                    <source src={BackgroundVideo} type='video/mp4'/>
                </video>
                <div className="header_container container">
                    <span className="logo">Logo</span>
                    <NavBar />
                </div>
            </header>
        </>
    )
}

export default Home