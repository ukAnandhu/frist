import React from 'react'
import liverpool from '../../images/liverpool.svg'
import green from '../../images/green-next.svg'


function CareerCard() {
    return (
       <div className="careercard">
            <div className="careercard__club">
                <img src={liverpool} alt="flag" />
                <p className="careercard__liverpool">liverpool</p>
            </div>
            <div className="careercard__date">
                <span className="careercard__date--text">01-08-2022 </span>
                <img src={green} alt="bla" />
                <span className="careercard__date--text">01-08-2023</span>
            </div>
       </div>
    )
}

export default CareerCard
