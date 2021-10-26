import React from 'react'
import CareerCard from './CareerCard'

function Career() {
    return (
       <div className="career">
           <h2 className="career__header">Career</h2>
           <div className="carrer__card">
               <CareerCard />
               <CareerCard />
               <CareerCard />
               <CareerCard />
               <CareerCard />

           </div>
       </div>
    )
}

export default Career
