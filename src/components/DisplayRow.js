import React from 'react'
import { connect } from 'react-redux';
import { 
    operationPicked, 
    clearPicked, 
    emptyPicked, 
    numberPicked, 
    equalPicked,
    displayAllBox
} from '../actions'
import '../App.css'
import DisplayButtons from './DisplayButtons';

class DisplayRow extends React.Component {
    generateBoxs(){        
        var a = this.props.layOut;
        
        if(a !== 'undefined'){
            var row1 = [];
            var row2 = [];
            var row3 = [];
            var row4 = [];
    
            for(let index = 0; index < a.length; index++){
                var sty = '';
                var input = '';
                var oc = '';
    
                switch (a[index]) {
                    case 'c':
                        sty = this.props.clearStyle;
                        input = 'c';
                        oc = () => this.props.clearPicked();
                        break;
                    case 'e':
                        sty = this.props.emptyStyle;
                        input = 'e';
                        oc = () => this.props.equalPicked();
                        break;
                    case '*':
                        sty = this.props.operStyle;
                        input = '*';
                        oc = () => this.props.operationPicked('m')
                        break;
                    case '\xF7':
                        sty = this.props.operStyle;
                        input = '\xF7';
                        oc = () => this.props.operationPicked('d')
                        break;
                    case '\u2212':
                        sty = this.props.operStyle;
                        input = '\u2212';
                        oc = () => this.props.operationPicked('s')
                        break;
                    case '=':
                        sty = this.props.operStyle;
                        input = '=';
                        oc = () => this.props.equalPicked()
                        break;
                    case '+':
                        sty = this.props.operStyle;
                        input = '+';
                        oc = () => this.props.operationPicked('a')
                        break;
                    default:
                        sty = this.props.numbStyle;
                        input = parseInt(a[index])
                        oc = () => this.props.numberPicked(parseInt(a[index]))
                        break;
                }
    
                var item = new bu (index, sty, input, oc)
    
                if(index < 4)
                {
                    row1 = row1.concat([item]);
                }
                else if(index < 8)
                {
                    row2 = row2.concat([item]);
                }
                else if(index < 12)
                {
                    row3 = row3.concat([item])
                }
                else
                {
                    row4 = row4.concat([item])
                }
            }
    
            // console.log(row1);
            // console.log(row2);
            // console.log(row3);
            // console.log(row4);
    
            return (
                <div>
                    <div className="row">
                        {row1.map( b => (
                            <DisplayButtons
                                key={b.key}
                                sty={b.sty}
                                input={b.input}
                                onClick={b.onClick}
                            />
                        ))
                        }
                    </div>
                    <div className="row">
                        {row2.map( b => (
                            <DisplayButtons
                                key={b.key}
                                sty={b.sty}
                                input={b.input}
                                onClick={b.onClick}
                            />
                        ))
                        }
                    </div>
                    <div className="row">
                        {row3.map( b => (
                            <DisplayButtons
                                key={b.key}
                                sty={b.sty}
                                input={b.input}
                                onClick={b.onClick}
                            />
                        ))
                        }
                    </div>
                    <div className="row">
                        {row4.map( b => (
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
    }

    render() {
        return (
            <div className="Frame-SubMain">
                {this.generateBoxs()}
            </div>
        )
    }
}

class bu { 
    constructor(key, sty, input, onClick) {        
        this.key = key;
        this.sty = sty;
        this.input = input;
        this.onClick = onClick;
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total, 
        subTotal: state.subTotal, 
        sign: state.sign,
        clearStyle: state.clearStyle,
        emptyStyle: state.emptyStyle,
        operStyle: state.operStyle,
        numbStyle: state.numbStyle,
        layOut: state.bLayout,
    }
}


const mapDispatchToProps = {
    operationPicked, 
    clearPicked, 
    emptyPicked, 
    numberPicked, 
    equalPicked,
    displayAllBox
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRow);