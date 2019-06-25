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
// import DisplayButtons from './DisplayButtons';
import { DiRow } from '../utilies'

class DisplayRow extends React.Component {
    generateBoxs(){        
        var a = this.props.layOut;
        
        if(a !== 'undefined'){
            var rows = [];
            var output = [];
    
            for(let index = 0; index < a.length; index++){
                var sty = '';
                var input = '';
                var oc = '';
    
                switch (a[index]) {
                    case 'c':{
                        sty = this.props.clearStyle;
                        input = 'c';
                        oc = () => this.props.clearPicked();
                        break;
                    }
                    case 'e':{
                        sty = this.props.emptyStyle;
                        input = 'e';
                        oc = () => this.props.equalPicked();
                        break;
                    }
                    case '*':{
                        sty = this.props.operStyle;
                        input = '*';
                        oc = () => this.props.operationPicked('m')
                        break;
                    }
                    case '\xF7':{
                        sty = this.props.operStyle;
                        input = '\xF7';
                        oc = () => this.props.operationPicked('d')
                        break;
                    }
                    case '\u2212':{
                        sty = this.props.operStyle;
                        input = '\u2212';
                        oc = () => this.props.operationPicked('s')
                        break;
                    }
                    case '=':{
                        sty = this.props.operStyle;
                        input = '=';
                        oc = () => this.props.equalPicked()
                        break;
                    }
                    case '+':{
                        sty = this.props.operStyle;
                        input = '+';
                        oc = () => this.props.operationPicked('a')
                        break;
                    }
                    default:{
                        sty = this.props.numbStyle;
                        input = parseInt(a[index])
                        oc = () => this.props.numberPicked(parseInt(a[index]))
                        break;
                    }
                }
    
                var item = new bu (index, sty, input, oc)
                rows = rows.concat([item])
            }            
            
            output.push(DiRow(1,rows.slice(0,4)))
            output.push(DiRow(2,rows.slice(4,8)))
            output.push(DiRow(3,rows.slice(8,12)))
            output.push(DiRow(4,rows.slice(12,16)))
            
            return (
                <div>
                    {output}
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