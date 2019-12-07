/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux';
import '../App.css'
import DisplayResultButton from './DisplayResultButton';

const DisplayMain = () => {
    const state_ = useSelector(state => state)
    return (
        <div className="column">
            <DisplayResultButton
                stySub={"Button-MainSub"}
                inputSub={state_.total + ' ' + state_.displaySign}
                sty={"Button-Main"}
                input={state_.subTotal}
            />
        </div>
    )
}

export default DisplayMain

