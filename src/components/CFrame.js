import React from 'react';
import { connect } from 'react-redux';
import { 
    operationPicked, 
    clearPicked, 
    emptyPicked, 
    numberPicked, 
    equalPicked 
} from '../actions'
import '../App.css'
import DisplayButtons from './DisplayButtons';
import ComplexDisplayButton from './ComplexDisplayButton';

class CFrame extends React.Component {
    render() {
        return (
            <div className="Frame-Main">
                <div className="column">
                    <ComplexDisplayButton
                        stySub={"Button-SubMain"}
                        subinput={this.props.total}
                        sty={"Button-Main"}
                        input={this.props.subTotal}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Clear"}
                        input={"c"}
                        onClick={() => this.props.clearPicked()}
                    />
                    <DisplayButtons
                        sty={"Button-Clear"}
                        input={"e"}
                        onClick={() => this.props.emptyPicked()}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"*"}
                        onClick={() =>this.props.operationPicked('m')}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"\xF7"}
                        onClick={() => this.props.operationPicked('d')}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={7}
                        onClick={() => this.props.numberPicked(7)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={8}
                        onClick={() => this.props.numberPicked(8)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={9}
                        onClick={() => this.props.numberPicked(9)}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"\u2212"}
                        onClick={() => this.props.operationPicked('s')}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={4}
                        onClick={() => this.props.numberPicked(4)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={5}
                        onClick={() => this.props.numberPicked(5)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={6}
                        onClick={() => this.props.numberPicked(6)}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"+"}
                        onClick={() => this.props.operationPicked('a')}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={1}
                        onClick={() => this.props.numberPicked(1)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={2}
                        onClick={() => this.props.numberPicked(2)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={3}
                        onClick={() => this.props.numberPicked(3)}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"="}
                        onClick={() => this.props.equalPicked()}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total, 
        subTotal: state.subTotal, 
        sign: state.sign,
    }
}

const mapDispatchToProps = {
    operationPicked, 
    clearPicked, 
    emptyPicked, 
    numberPicked, 
    equalPicked 
}

export default connect(mapStateToProps, mapDispatchToProps)(CFrame);