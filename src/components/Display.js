import React from 'react';
import '../App.css'
import DisplayMain from './DisplayMain'
import DisplayRow from './DisplayRow'
import DisplayHistory from './DisplayHistory'

const Display = () => {  
    return (
        <div className="Frame-Main">
            <DisplayMain />
            <DisplayRow />
            <DisplayHistory />
        </div>
    )
}

export default Display;