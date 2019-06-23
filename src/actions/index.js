import { 
    OPER_PICKED,
    CLEAR_PICKED,
    EMPTY_PICKED,
    NUMBER_PICKED,
    EQUAL_PICKED,
} from './type'

export const operationPicked = (sign) => {
    return {
        type: OPER_PICKED,
        sign 
    }
}

export const clearPicked = () => {
   return {
       type: CLEAR_PICKED,
       total: 0,
       subTotal: 0,
       sign: ''
   } 
}

export const emptyPicked = () => {
    return {
        type: EMPTY_PICKED,
        total: 0,
        sign: ''
    }
}

export const numberPicked = (number) => {
    return {
        type: NUMBER_PICKED,
        number
    }
}
   
export const equalPicked = () => {
    return {
        type: EQUAL_PICKED
    }
}
