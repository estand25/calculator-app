import React from 'react';
import '../App.css'
import DisplayButtons from '../components/DisplayButtons';

const DiRow = (key, row) => {
    return (
        <div key={key} className="row">
            {row.map( b => (
                <DisplayButtons
                    key={b.key}
                    sty={b.sty}
                    input={b.input}
                    onClick={b.onClick}
                />
            ))
            }
        </div>
    )
}

export {
    DiRow
}