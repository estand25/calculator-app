import React from 'react'
import '../App.css'

const DisplayButtons = (props) => {
    return (
        <div className={props.sty}>
            {props.input}
        </div>
    )
}


export default DisplayButtons;