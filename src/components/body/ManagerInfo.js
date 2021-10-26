import React from 'react'
import Manager from './Manager'

function ManagerInfo() {
    return (
        <div className="info">
            <h2 className="info__header">Manager Info</h2>
            <div className="info__items">
                <Manager heading={'Age'} text={'28'} />
                <Manager heading={'Age'} text={'28'} />
                <Manager heading={'Age'} text={'28'} />
                <Manager heading={'Age'} text={'28'} />

            </div>

        </div>
    )
}

export default ManagerInfo
