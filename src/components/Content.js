import React from 'react'
import HeaderBar from './Header/HederBar'
import ManagerCard from './body/ManagerCard'
import ManagerInfo from './body/ManagerInfo'
import Career from './second/Career'
import About from './second/about'
import Matches from './body/inner/Matches'
import Stats from './body/inner/Stats'

function Content() {
    return (
       <div className="content">
           <HeaderBar />
           <div className="content__first">
               <ManagerCard />
               <ManagerInfo />
               <div className="content__first--inner">
                  <Matches />
                  <Stats /> 
               </div>
           </div>
           <div className="content__second">
                <Career />
                <About />
           </div>
       </div>
    )
}

export default Content
