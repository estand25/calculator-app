/* eslint-disable react/prop-types */
import React from 'react'

const DisplayResultButton = (props) => {
    return (
        <div className="row">
            <div className={props.stySub}>
                {props.inputSub}
            </div>
            <div className={props.sty}>
                {props.input}
            </div>
        </div>
    )
}

export default DisplayResultButton