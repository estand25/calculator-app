import React from 'react';
import '../App.css'
import DisplayMain from './DisplayMain'
import DisplayRow from './DisplayRow'
import DisplayHistory from './DisplayHistory'

const CFrame = () => {  
    return (
        <div className="Frame-Main">
            <DisplayMain />
            <DisplayRow />
            <DisplayHistory />
        </div>
    )
}

export default CFrame;