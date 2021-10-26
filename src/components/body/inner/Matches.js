import React from 'react'
import MatchesCard from './MatchesCard'
import MatchMobile from './MatchMobile'
import previous from '../../../images/matches-previous.svg'
import round from '../../../images/matches-down.svg'
import next from '../../../images/matches-next.svg'
import lion from '../../../images/white-lion.svg'



function Matches() {
    return (
        <div className="match">
           <div className="match-container">
                <h2 className="match__header">Matches</h2>
                <div className="match__navbar">
                    <div className="match__navbar-previous">
                        <img src={previous} alt="previous" />
                        <p className="match__navbar--text">Previous</p>
                    </div>
                    <div className="match__navbar-round">
                       <p className="match__navbar--text">Round35</p>
                       <img src={round} alt="round" /> 
                    </div>
                    <div className="match__navbar-next">
                        <p className="match__navbar--text">Next</p>
                        <img src={next} alt="next" />
                    </div>
                </div>


           </div>
                <div className="match__date">14/07/2021</div>
                <div className="match__league-container">
                  <img src={lion} alt="league" />                 
                  <p className="match__league">Premier league</p>
                </div>
          <div className="match__card">
              <MatchesCard />
              <MatchesCard />
              <MatchesCard />
              <MatchesCard />

          </div>
          <div className="match__mobile">
              <MatchMobile />
              <MatchMobile />
              <MatchMobile />
          </div>
        </div>
    )
}

export default Matches
