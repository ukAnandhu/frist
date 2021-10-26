import React from 'react'

function Manager({heading, text}) {
    return (
       <div className="manager">
           <p className="manager__head">{heading}</p>
           <p className="manager__text">{text}</p>
       </div>
    )
}

export default Manager
