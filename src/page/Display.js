import React from 'react';
import '../App.css'
import DisplayMain from '../components/DisplayMain'
import DisplayRow from '../components/DisplayRow'
import DisplayHistory from '../components/DisplayHistory'

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