import React from 'react'
import '../App.css'

const DisplayButtons = (props) => {
    return (
        <div className={props.sty} onClick={props.onClick}>
            {props.input}
        </div>
    )
}

export default DisplayButtons;