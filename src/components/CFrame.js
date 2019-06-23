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
    onEqualClick(){
        this.props.equalPicked();
    }

    onOperationClick(Ope){
        this.props.operationPicked(Ope);
    }

    onNumberClick(n){
        this.props.numberPicked(n);
    }

    clearOnClick(){
        this.props.clearPicked();
    }

    emptyOnClick(){
        this.props.emptyPicked();
    }

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
                        onClick={() => this.clearOnClick()}
                    />
                    <DisplayButtons
                        sty={"Button-Clear"}
                        input={"e"}
                        onClick={() => this.emptyOnClick()}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"*"}
                        onClick={() => this.onOperationClick('m')}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"\xF7"}
                        onClick={() => this.onOperationClick('d')}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={7}
                        onClick={() => this.onNumberClick(7)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={8}
                        onClick={() => this.onNumberClick(8)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={9}
                        onClick={() => this.onNumberClick(9)}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"\u2212"}
                        onClick={() => this.onOperationClick('s')}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={4}
                        onClick={() => this.onNumberClick(4)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={5}
                        onClick={() => this.onNumberClick(5)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={6}
                        onClick={() => this.onNumberClick(6)}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"+"}
                        onClick={() => this.onOperationClick('a')}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={1}
                        onClick={() => this.onNumberClick(1)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={2}
                        onClick={() => this.onNumberClick(2)}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={3}
                        onClick={() => this.onNumberClick(3)}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"="}
                        onClick={() => this.onEqualClick()}
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