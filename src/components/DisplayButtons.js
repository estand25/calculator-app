/* eslint-disable react/prop-types */
import React from 'react'

const DisplayButtons = (props) => {
    return (
        <div className={props.sty} onClick={props.onClick}>
            {props.input}
        </div>
    )
}

export default DisplayButtons;