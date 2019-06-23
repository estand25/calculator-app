import React from 'react'

const ComplexDisplayButton = (props) => {
    return (
        <div className="row">
            <div className={props.stySub}>
                {props.subinput}
            </div>
            <div className={props.sty}>
                {props.input}
            </div>
        </div>
    )
}

export default ComplexDisplayButton