import React from 'react';
import { connect } from 'react-redux';
import '../App.css'
import DisplayButtons from './DisplayButtons';
import ComplexDisplayButton from './ComplexDisplayButton';

class CFrame extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          subTotal: 0, 
          sign: '',
          total: 0 
        };
    }

    onEqualClick(){
        var {total, subTotal, sign } = this.state;

        console.log(`Total: ${total}, Sub-total: ${subTotal}, Sign: ${sign}`);

        switch (sign) {
            case 'a':
                total = (parseInt(total) + parseInt(subTotal));
                subTotal = 0;
                break;
            case 's':
                total = (parseInt(subTotal) - parseInt(total)); 
                subTotal = 0;
                break;
            case 'd':
                total = (parseInt(subTotal) / parseInt(total));
                subTotal = 0;
                break;
            case 'm':
                total = (parseInt(subTotal) * parseInt(total))
                subTotal = 0;
                break;
            default:
                break;
        }

        this.setState({
            total: total,
            subTotal: subTotal,
            sign: sign
        })

        console.log(`Total: ${total}, Sub-total: ${subTotal}, Sign: ${sign}`);
    }

    onOperationClick(Ope){
        console.log(`Operation: ${Ope}`);
        var {total, subTotal, sign } = this.state;

        console.log(`Total: ${total}, Sub-total: ${subTotal}, Sign: ${sign}`);
        
        if(subTotal === 0) 
            return

        total = subTotal;
        subTotal = 0;

        this.setState({
            total: total,
            subTotal: subTotal,
            sign: Ope
        })

        console.log(`Total: ${total}, Sub-total: ${subTotal}, Sign: ${sign}`);        
    }

    onNumberClick(n){
        console.log(`Current Number: ${n}`);
        var numString = this.state.subTotal.toString();

        if('0' === numString){
            numString = n.toString(); 
        } else {
            numString = numString.concat(n.toString())
        }      

        console.log(`Display Number: ${numString}`);  
        
        this.setState({
            subTotal: numString
        })
    }

    clearOnClick(){
        console.log('Clear');

        console.log(`Subtotal/Total Number: 0`);  
        
        this.setState({
            total: 0,
            subTotal: 0,
            sign: ''
        })
    }

    emptyOnClick(){
        console.log('empty');

        console.log('Total Number: 0');

        this.setState({
            total:0,
            sign: ''
        })
    }

    render() {
        return (
            <div className="Frame-Main">
                <div className="column">
                    <ComplexDisplayButton
                        stySub={"Button-SubMain"}
                        subinput={this.state.total}
                        sty={"Button-Main"}
                        input={this.state.subTotal}
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
                        onClick={() => this.onNumberClick(1)}
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

export default CFrame;