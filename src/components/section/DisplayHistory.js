import React from 'react';
import { useSelector } from 'react-redux'
import { DiHistoryRow } from '../../utilies'

class hItem {
    constructor(key, line) {
        this.key = key;
        this.line = line;
    }
}

const DisplayHistory = () => {
    const state_ = useSelector(state => state);
    
    const ShowHistory = () =>{
        var { history } = state_;
        var historyItem = [];

        for(let index = 0; index < history.length; index++){
            var item = new hItem(index,history[index])
            
            historyItem = historyItem.concat([item])
        }

        if(history === 'undefined'){
            return (
                <>
                </>
            )
        } else {
            return (
                <div>
                    {DiHistoryRow(historyItem)}
                </div>
            )
        }
    }

    return (
        <div className="Frame-History">
            <ShowHistory />
        </div>
    )
}

export default DisplayHistory