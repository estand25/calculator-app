import React from 'react'
import { connect } from 'react-redux';
import { 
    operationPicked, 
    clearPicked, 
    emptyPicked, 
    numberPicked, 
    equalPicked,
} from '../actions'
import '../App.css'


class DisplayRow extends React.Component {
    
    generateBoxs(){
        var a =  ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','='];

        if(a !== 'undefined'){
            console.log(a);
            var botton = [];
    
            for(let index = 0; index < a.length; index++){
                var sty = '';
                var input = '';
                var oc = '';
    
                switch (a[index]) {
                    case 'c':
                        sty = this.props.clearStyle;
                        input = 'c';
                        oc = this.props.clearPicked();
                        break;
                    case 'e':
                        sty = this.props.emptyStyle;
                        input = 'e';
                        oc = this.props.equalPicked();
                        break;
                    case '*':
                        sty = this.props.operStyle;
                        input = '*';
                        oc = this.props.operationPicked('m')
                        break;
                    case '\xF7':
                        sty = this.props.operStyle;
                        input = '\xF7';
                        oc = this.props.operationPicked('d')
                        break;
                    case '\u2212':
                        sty = this.props.operStyle;
                        input = '\u2212';
                        oc = this.props.operationPicked('s')
                        break;
                    case '=':
                        sty = this.props.operStyle;
                        input = '=';
                        oc = this.props.equalPicked()
                        break;
                    case '+':
                        sty = this.props.operStyle;
                        input = '=';
                        oc = this.props.operationPicked('a')
                        break;
                    default:
                        sty = this.props.numbStyle;
                        input = parseInt(a[index])
                        oc = this.props.numberPicked(parseInt(a[index]))
                        break;
                }
    
                var item = new bu (
                    index,
                    sty,
                    input,
                    oc
                )
    
                botton = botton.concat([item]);
            }
    
            console.log(botton);
    
            
    
            // return (
            //     <div className="row">
            //         {a.map( g => (
            //             <DisplayButtons
            //                 sty={}
            //                 input={}
            //                 onClick={() =>}
            //             />
            //         ))
    
            //         }
            //     </div>
            // )
        }
    }

    render() {
        return (
            <div className="row">
                {this.generateBoxs()}
                {/* {
                    this.props.dr.map(d =>
                    
                        )
                } */}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRow);