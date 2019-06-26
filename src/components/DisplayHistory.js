import React from 'react';
import { connect } from 'react-redux'
import '../App.css'
import { DiHistoryRow } from '../utilies'

class DisplayHistory extends React.Component {
    showHistory(){
        var { history } = this.props
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

    render(){
        return (
            <div className="Frame-History">
                {this.showHistory()}
            </div>
        )
    }
}

class hItem {
    constructor(key, line) {
        this.key = key;
        this.line = line;
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

export default connect(mapStateToProps)(DisplayHistory);