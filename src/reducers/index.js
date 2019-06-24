import {
    OPER_PICKED,
    CLEAR_PICKED,
    EMPTY_PICKED,
    NUMBER_PICKED,
    EQUAL_PICKED,
} from '../actions/type'

const initialState = {
    sign: "",
    total: 0,
    subTotal: 0,
    clearStyle: 'Button-Clear',
    emptyStyle: 'Button-Empty',
    operStyle: 'Button-Operation',
    numbStyle: 'Button-Number',
    bLayout: ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','=']
}

export const calculator = (state = initialState, action) => {
    switch (action.type) {
        case OPER_PICKED:{
            var a =  {...state, 
                    sign: action.sign, 
                    total: state.sign === 'e' ? state.total : state.subtotal === 0 ? 0 : state.subTotal, 
                    subTotal: 0,
                }
            console.log(a);
            return a;
        }     
        case CLEAR_PICKED:{
            var b = {...state,
                sign: action.sign,
                total: action.total, 
                subTotal: action.subTotal,
            }
            console.log(b);
            return b;
        }
        case EMPTY_PICKED:{
            var c = {...state,
                sign: action.sign,   
                total: action.total,     
            }
            console.log(c);
            return c;
        }
        case NUMBER_PICKED:{
            var d = {...state,
                subTotal: state.subTotal === 0 ? action.number : state.subTotal.toString().concat(action.number)
            }
            console.log(d);
            return d;
        }
        case EQUAL_PICKED: {
            var e = ''
            switch (state.sign) {
                case 'a':{
                    e = {...state,
                            total: (parseInt(state.total) + parseInt(state.subTotal)),
                            subTotal: 0,
                            sign: 'e'
                        }
                        break;
                }                      
                case 's': {
                    e = {...state,
                            total: (parseInt(state.total) - parseInt(state.subTotal)),
                            subTotal: 0,
                            sign: 'e'
                        } 
                        break; 
                }                    
                case 'd':{
                    e =  {...state,
                            total: (parseInt(state.subTotal)/ parseInt(state.total)),
                            subTotal: 0,
                            sign: 'e'
                        } 
                        break;
                    } 
                case 'm':{
                    e =  {...state,
                            total: (parseInt(state.subTotal) * parseInt(state.total)),
                            subTotal: 0,
                            sign: 'e'
                        }
                        break;
                }                      
                default:{
                    e = ''
                    break;
                }
            }
            console.log(e);            
            return e;
            // break;
        }
        default:
            return state;
    }
}