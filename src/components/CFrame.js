import React from 'react';
import '../App.css'
import DisplayButtons from './DisplayButtons';

class CFrame extends React.Component {
    render() {
        return (
            <div className="Frame-Main">
                <div className="column">
                    <DisplayButtons
                        sty={"Button-Main"}
                        input={0}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Clear"}
                        input={"clear"}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"\xF7"}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={"7"}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={"8"}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={"9"}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"\u2212"}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={"4"}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={"5"}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={"6"}
                    />
                    <DisplayButtons
                        sty={"Button-Operation"}
                        input={"+"}
                    />
                </div>
                <div className="row">
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={"1"}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={"2"}
                    />
                    <DisplayButtons
                        sty={"Button-Number"}
                        input={"3"}
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