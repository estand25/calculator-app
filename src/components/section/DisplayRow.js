/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DiRow } from '../../utilies'
import { actions } from '../../actions/type'

class bu { 
    constructor(key, sty, input, onClick) {        
        this.key = key;
        this.sty = sty;
        this.input = input;
        this.onClick = onClick;
    }
}

const DisplayRow = () => {
    const mState = useSelector(state => state)
    const mDispatch = useDispatch()

    const GenerateBoxs = () =>{        
        var a = mState.layOut;
        
        if(a !== 'undefined'){
            var rows = [];
            var output = [];

            try {
                if(a.length !== 16)
                {
                    console.log("I'm breaking, sorry...");
                }          
            } catch (error) {
                a = ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','='];
            }

            for(let index = 0; index < a.length; index++){
                var sty = '';
                var input = '';
                var oc = '';
    
                switch (a[index]) {
                    case 'c':{
                        sty = mState.clearStyle;
                        input = 'c';
                        oc = () => mDispatch({
                            type: actions.CLEAR_PICKED,
                            total: 0,
                            subTotal: 0,
                            sign: ''
                        })
                        break;
                    }
                    case 'e':{
                        sty = mState.emptyStyle;
                        input = 'e';
                        oc = () => mDispatch({
                            type: actions.EMPTY_PICKED,
                            total: 0,
                            sign: ''
                        })
                        break;
                    }
                    case '*':{
                        sty = mState.operStyle;
                        input = '*';
                        oc = () => mDispatch({
                            type: actions.OPER_PICKED,
                            sign: 'm'
                        })
                        break;
                    }
                    case '\xF7':{
                        sty = mState.operStyle;
                        input = '\xF7';
                        oc = () => mDispatch({
                            type: actions.OPER_PICKED,
                            sign: 'd'
                        })
                        break;
                    }
                    case '\u2212':{
                        sty = mState.operStyle;
                        input = '\u2212';
                        oc = () => mDispatch({
                            type: actions.OPER_PICKED,
                            sign: 's'
                        })
                        break;
                    }
                    case '=':{
                        sty = mState.operStyle;
                        input = '=';
                        oc = () => mDispatch({
                            type: actions.EQUAL_PICKED
                        })
                        break;
                    }
                    case '+':{
                        sty = mState.operStyle;
                        input = '+';
                        oc = () => mDispatch({
                            type: actions.OPER_PICKED,
                            sign: 'a'
                        })
                        break;
                    }
                    default:{
                        sty = mState.numbStyle;
                        input = parseInt(a[index])
                        oc = () => mDispatch({
                            type: actions.NUMBER_PICKED,
                            number: parseInt(a[index])
                        })
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

    return (
        <div className="Frame-SubMain">
            <GenerateBoxs />
        </div>
    )
}

export default DisplayRow