import { 
    actions
} from './type'

export const operationPicked = (sign) => {
    return {
        type: actions.OPER_PICKED,
        sign 
    }
}

export const clearPicked = () => {
   return {
       type: actions.CLEAR_PICKED,
       total: 0,
       subTotal: 0,
       sign: ''
   } 
}

export const emptyPicked = () => {
    return {
        type: actions.EMPTY_PICKED,
        total: 0,
        sign: ''
    }
}

export const numberPicked = (number) => {
    return {
        type: actions.NUMBER_PICKED,
        number
    }
}
   
export const equalPicked = () => {
    return {
        type: actions.EQUAL_PICKED
    }
}

export const displayAllBox = () => {
    return {
        type: actions.DISPLAY_BOX
    }
}
