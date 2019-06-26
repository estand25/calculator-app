import React from 'react'
import { connect } from 'react-redux';
import '../App.css'
import DisplayResultButton from './DisplayResultButton';

class DisplayMain extends React.Component {
    render() {
        return (
            <div className="column">
                <DisplayResultButton
                    stySub={"Button-MainSub"}
                    inputSub={this.props.total + ' ' + this.props.displaySign}
                    sty={"Button-Main"}
                    input={this.props.subTotal}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total, 
        subTotal: state.subTotal, 
        displaySign: state.displaySign
    }
}

export default connect(mapStateToProps)(DisplayMain)

