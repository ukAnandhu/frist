import React from 'react'
import pep from '../../images/pep.png'
import croatia from '../../images/croatia.svg'
import utd from '../../images/manutd.svg'
import league from '../../images/lion.svg'


function ManagerCard() {
    return (
     <div className="card">
       <div className="card__pic">
         <img src={pep} alt="pep" />
       </div>
       <div className="card__container">
            <div className="card__manager">
              <h2 className="card__name">Pep Guardiola <span className="card__name--inner">(Manager)</span></h2>
            </div>
            <div className="card__details">
                   <div className="mobile-hidden">
                      <p className="card__details--heading">Nationality</p>
                        <div className="card__details--inner">
                          <img src={croatia} alt="flag" />
                          <p className="card__details--text">Crotia</p>
                        </div>
                    </div>
                   <div className="card__details--heading">
                      <p className="card__details--hading">Club</p>
                        <div className="card__details--inner mobile-visible">
                          <img src={utd} alt="flag" />
                          <p className="card__details--text">Man United</p>
                        </div>
                    </div>
                <div  className="mobile-hidden">
                    <p className="card__details--heading">League</p>
                    <div className="card__details--inner">
                      <img src={league} alt="flag" />
                      <p className="card__details--text">Premier League</p>
                    </div>
                </div>
            </div>
       </div>
     </div>
    )
}

export default ManagerCard
