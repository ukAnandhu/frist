import React from 'react'
import Statistics from './statistics'
import liverpool from '../../../images/liverpool.svg'
import utd from '../../../images/manutd.svg'


function Stats() {
    return (
           
    <div className="stats">
        <div className="stats__match">
            <div className="stats__liverpool">
                <img src={liverpool} alt="flag" className="stats__big" />
                <p className="stats__text">Liverpool</p>
            </div>
            <div className="stats__score">
                <p className="stats__score--result">0-1</p>
                <p className="stats__score--ft">FT</p>
            </div>
            <div className="stats__United">
                <img src={utd} alt="flag"  className="stats__big"/>
                <p className="stats__text">Man United</p>
            </div>
        </div>
        <p className="stats__winning">Winning Percentage?</p>
        <div className="stats__percentage">
            <span className="stats__56">56%</span>
            <span className="stats__14">18%</span>
            <span className="stats__null">26%</span>
        </div>
        <div className="stats__wining">
            <span className="stats__wining--first"></span>
            <span className="stats__wining--second"></span>
            <span className="stats__wining--third"></span>
        </div>
        <div className="stats__details">
            <span className="stats__details--match">Match Details</span>
            <span className="stats__details--text">Lineups</span>
            <span className="stats__details--text">Standings</span>
        </div>
        <div className="stats__bottom">
                <div className="stats__bottom--blue"></div>
     
        </div>
         <div >
             <Statistics />
         </div>
    </div>        
    )
}

export default Stats
