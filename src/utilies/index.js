import React from 'react';
import '../App.css'
import DisplayButtons from '../components/item/DisplayButtons';

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

const DiHistoryRow = (row) => {
    return (
        <div className="row">
            {row.map(b => (
                        <div key={b.key} className="History-Item">
                            {b.line}
                        </div>
                    ) 
                )
            }
        </div>
    )
}

export {
    DiRow,
    DiHistoryRow
}