import React from 'react'
import { connect } from 'react-redux';
import '../App.css'
import ComplexDisplayButton from './ComplexDisplayButton';

class DisplayMain extends React.Component {
    render() {
        return (
            <div className="column">
                <ComplexDisplayButton
                    stySub={"Button-SubMain"}
                    subinput={this.props.total}
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
    }
}

export default connect(mapStateToProps)(DisplayMain)

