import React from 'react'
import search from '../images/search.svg'
import bell from '../images/bell.svg'
import soccer from '../images/logo.svg'


function Header() {
    return (
        <div className="header">
           <div className="header-container">
             <div className="header__soccer-container">
               <img src={soccer} alt="soccer-icon" />
                 <h2 className="header__soccer">Soccer Live</h2> 
             </div>
              <div className="header__search-container">
                <img src={search} alt="search" className="header__search-icon" />
               <input type="text" className="header__search" placeholder="Search" />
              </ div>
            <div className="header__notification">
               <div className="header__notifivation-container"> 
               <img src={bell} alt="bell" className="header__notification-bell"/>
                 <p className="header__not">Notification</p>
                </div> 
            </div> 
          </div>
      </div>
    )
}

export default Header
