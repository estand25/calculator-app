import React from 'react';
import '../App.css'
import DisplayButtons from './DisplayButtons';

class CFrame extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          display: 0,  
        };
    }

    onNumberClick(n){
        console.log(`Current Number: ${n}`);
        var numString = this.state.display.toString();

        if('0' === numString){
            numString = n.toString(); 
        } else {
            numString = numString.concat(n.toString())
        }      

        console.log(`Display Number: ${numString}`);  
        
        this.setState({
            display: numString
        })
    }

    clearOnClick(){
        console.log('Clear');

        console.log(`Display Number: 0`);  
        
        this.setState({
            display: 0
        })
    }

    render() {
        return (
            <div className="Frame-Main">
                <div className="column">
                    <DisplayButtons
                        sty={"Button-Main"}
                        input={this.state.display}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Clear"}
                        input={"clear"}
                        onClick={() => this.clearOnClick()}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"\xF7"}
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
                    />
                </div>
            </div>
        )
    }
}

export default CFrame;