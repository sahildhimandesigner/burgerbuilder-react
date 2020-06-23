import React from 'react'
import './BuildControl'

const BuildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="label">{props.label}</div>
            <button className="Less">Less</button>
            <button className="More">More</button>
        </div>
    )
}

export default BuildControl;