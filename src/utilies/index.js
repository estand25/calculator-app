import React from 'react';
import '../App.css'
import DisplayButtons from '../components/DisplayButtons';

const DiRow = (row) => {
    return (
        <div>
            <div className="row">
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
        </div>
    )
}

export {
    DiRow
}