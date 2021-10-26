import React from 'react'
import win from '../../../images/win.svg'
import city from '../../../images/man-city.svg'
import liverpool from '../../../images/liverpool.svg'



function MatchesCard() {
    return (
    
        <div className="score">
              <img src={win} alt="win" className="score__winicon" />
              <div className="score__team">
                  <p className="score__team--name">Man City</p>
                  <img src={city} alt="icon" className="score__team" />
              </div>
              <div className="score__score">
                  <span className="score__score--number">3</span>
                  <span className="score__score--ft">FT</span>
                  <span className="score__score--number">1</span>
              </div>
              <div className="score__team">
                  <img src={liverpool} alt="icon" />
                  <p className="score__team--name">Liverpool</p>
              </div>
   </div>     

    )
}

export default MatchesCard
