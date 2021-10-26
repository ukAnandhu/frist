import React from 'react'
import liverpool from '../../../images/liverpool.svg'
import utd from '../../../images/manutd.svg'


function statistics() {
    return (
        <div className="stat">
            <h3 className="stat__header">Statistics</h3>
            <div className="stat__team">
                <div className="stat__team--inner">
                    <img src={liverpool} alt="flag" />
                    <p className="stat__name">Liverpool</p>
                </div>
                <div className="stat__team--inner">
                    <p className="stat__name">Man United </p>
                    <img src={utd} alt="flag" className="stat__team--utd" />
               </div>
            </div>
            <p className="stat__shot">shot on goal</p>
            <div className="stat__kick">
                <span className="stat__text">8</span>
                <div className="stat__line">
                    <span className="stat__white--small"></span>
                    <span className="stat__blue"></span>
                    <span className="stat__white"></span>
                    <span className="stat__white--big"></span>
                </div>
                <span className="stat__text">6</span>
            </div>
            
        </div>
    )
}

export default statistics
