import React from 'react';
import '../App.css'
import DisplayMain from './DisplayMain'
import DisplayRow from './DisplayRow'

const CFrame = () => {  
    return (
        <div className="Frame-Main">
            <DisplayMain />
            <DisplayRow/>
        </div>
    )
}

export default CFrame;