import React from 'react'
import MatchesCard from './MatchesCard'
import league from '../../../images/white-lion.svg'


function MatchMobile() {
    return (
        
        <div className="mobilematch">
            <div className="mobilematch__date">14/07/2021</div>
            <div className="mobilematch__league">
                <img src={league} alt="logo" />
                <p className="mobilematch__text">Premier league</p>
            </div>
             <div className="mobilematch__visible">
                  <MatchesCard />
              </div>
        </div>     
    )
}

export default MatchMobile
