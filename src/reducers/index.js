import {
    OPER_PICKED,
    CLEAR_PICKED,
    EMPTY_PICKED,
    NUMBER_PICKED,
    EQUAL_PICKED,
} from '../actions/type'

const initialState = {
    sign: '',
    total: 0,
    subTotal: 0
}

export const calculator = (state = initialState, action) => {
    switch (action.type) {
        case OPER_PICKED:
            return [...state, {
                    sign: action.sign, 
                    total: state.subTotal === 0 ? 0 : state.subTotal, 
                    subTotal: 0
                }]
        case CLEAR_PICKED:
            return [...state, {
                total: action.total, 
                subTotal: action.subTotal,
                sign: action.sign
            }
        ]
        case EMPTY_PICKED:
            return [...state,{
                total: action.total,
                sign: action.sign        
            }
        ]
        case NUMBER_PICKED:
            return [...state, {
                subTotal: action.subTotal.toString() === '0' ? action.number : state.subTotal.toString().concat(action.number)
            }
        ]
        case EQUAL_PICKED:{
            switch (state.sign) {
                case 'a':
                    return [...state,{
                            total: (parseInt(state.total) + parseInt(state.subTotal)),
                            subTotal: 0
                        }                      
                    ]
                case 's':
                    return [...state,{
                            total: (parseInt(state.subTotal) - parseInt(state.total)),
                            subTotal: 0
                        }                      
                    ]
                case 'd':
                    return [...state,{
                            total: (parseInt(state.subTotal)/ parseInt(state.total)),
                            subTotal: 0
                        }                      
                    ]
                case 'm':
                    return [...state,{
                            total: (parseInt(state.subTotal) * parseInt(state.total)),
                            subTotal: 0
                        }                      
                    ]
                default:
                    break;
            }
        }
        default:
            return state;
    }
}