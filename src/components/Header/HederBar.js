import React from 'react'
import home from '../../images/home.svg'
// import home from '../../images/home.svg'
import arrow from '../../images/forward-arrow.svg'

function HederBar() {
    return (
        <div className="home">
        <div className="home-container">
            <img className="home__home" src= {home} alt="home" />
            <img src={arrow} alt="arrow" />
            <p className="home__text">England</p>
            <img  src={arrow} alt="arrow" />
            <p className="home__league">Premier League</p>
            <img className="home__arrow" src={arrow} alt="arrow" />
            <p className="home__manager">Pep Guardialo(Manager)</p>
            <p className="home__mobile">pep Guardialo</p>
         </div>
    </div>
    )
}

export default HederBar

