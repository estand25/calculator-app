import React from 'react';
import '../App.css'
import DisplayMain from '../components/section/DisplayMain'
import DisplayRow from '../components/section/DisplayRow'
import DisplayHistory from '../components/section/DisplayHistory'

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