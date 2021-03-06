/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { actions } from '../actions/type'
import {calculator} from './index'

describe('reducer', () => {
    const initialState = {
        sign: "",
        total: 0,
        subTotal: 0,
        clearStyle: 'Button-Clear',
        emptyStyle: 'Button-Empty',
        operStyle: 'Button-Operation',
        numbStyle: 'Button-Number',
        bLayout: ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','='],
        displayBox: false,
        onceDisplayed: 0,
        history: [],
        displaySign: ''
    }

    it('should return the initial state', () => {

        expect(calculator(undefined, {})).toEqual(initialState)
    })

    it('should set operation picker add', () => {
        const a = {
            type: actions.OPER_PICKED,
            sign: 'a'
        }
        expect(a).toEqual({
            type: actions.OPER_PICKED,
            sign: 'a'
        })
    })

    it('should return state plus sign Add', () => {
        const a = {
            type: actions.OPER_PICKED,
            sign: 'a'
        }

        var rec = Object.assign(initialState, {})
        rec.sign = 'a'
        rec.total = 0
        rec.subTotal = 0
        rec.displaySign = '+' 

        expect(calculator(initialState, a)).toEqual(rec)
    })

    it('should set operation picker subtact', () => {
        const s = {
            type: actions.OPER_PICKED,
            sign: 's'
        }
        expect(s).toEqual({
            type: actions.OPER_PICKED,
            sign: 's'
        })
    })

    it('should return state plus sign subtract', () => {
        const a = {
            type: actions.OPER_PICKED,
            sign: 's'
        }

        var rec = Object.assign(initialState, {})
        rec.sign = 's'
        rec.total = 0
        rec.subTotal = 0
        rec.displaySign = '\u2212'

        expect(calculator(initialState, a)).toEqual(rec)
    })

    it('should set operation picker divide', () => {
        const d = {
            type: actions.OPER_PICKED,
            sign: 'd'
        }
        expect(d).toEqual({
            type: actions.OPER_PICKED,
            sign: 'd'
        })
    })

    it('should return state plus sign divide', () => {
        const a = {
            type: actions.OPER_PICKED,
            sign: 'd'
        }

        var rec = Object.assign(initialState, {})
        rec.sign = 'd'
        rec.total = 0
        rec.subTotal = 0
        rec.displaySign = '\xF7'

        expect(calculator(initialState, a)).toEqual(rec)
    })

    it('should set operation picker time', () => {
        const m = {
            type: actions.OPER_PICKED,
            sign: 'm'
        }
        expect(m).toEqual({
            type: actions.OPER_PICKED,
            sign: 'm'
        })
    })

    it('should return state plus sign time', () => {
        const a = {
            type: actions.OPER_PICKED,
            sign: 'm'
        }

        var rec = Object.assign(initialState, {})
        rec.sign = 'm'
        rec.total = 0
        rec.subTotal = 0
        rec.displaySign = '*'

        expect(calculator(initialState, a)).toEqual(rec)
    })

    it('should set operation picker nothing', () => {
        const _ = {
            type: actions.OPER_PICKED,
            sign: '_'
        }
        expect(_).toEqual({
            type: actions.OPER_PICKED,
            sign: '_'
        })
    })

    it('should return state plus no sign', () => {
        const a = {
            type: actions.OPER_PICKED,
            sign: '_'
        }

        var rec = Object.assign(initialState, {})
        rec.sign = '_'
        rec.total = 0
        rec.subTotal = 0
        rec.displaySign = ''

        expect(calculator(initialState, a)).toEqual(rec)
    })

    it('should clear picker', () => {
        const expectAction = {
            type: actions.CLEAR_PICKED,
            total: 0,
            subTotal: 0,
            sign: ''
        }

        expect(expectAction).toEqual({
            type: actions.CLEAR_PICKED,
            total: 0,
            subTotal: 0,
            sign: ''
        })
    })

    it('should clear picker return additional state', () => {
        const a = {
            type: actions.CLEAR_PICKED,
            total: 1,
            subTotal: 1
        }

        var rec = Object.assign(initialState, {})
        rec.sign = undefined
        rec.total = 1
        rec.subTotal = 1
        rec.displaySign = ''

        expect(calculator(initialState, a)).toEqual(rec)
    })

    it('should Empty picker', () => {
        const expectAction = {
            type: actions.EMPTY_PICKED,
            total: 0,
            sign: ''
        }

        expect(expectAction).toEqual({
            type: actions.EMPTY_PICKED,
            total: 0,
            sign: ''
        })
    })

    it('should Empty picker return additional state', () => {
        const a = {
            type: actions.EMPTY_PICKED,
            total: 0,
            sign: ''
        }

        var rec = Object.assign(initialState, {})
        rec.sign = ''
        rec.total = 0
        rec.displaySign = ''

        expect(calculator(initialState, a)).toEqual(rec)
    })

    it('should Number picker', () => {
        const expectAction = {
            type: actions.NUMBER_PICKED,
            number: 0
        }

        expect(expectAction).toEqual({
            type: actions.NUMBER_PICKED,
            number: 0
        })
    })

    it('should Number picker return additional state', () => {
        const a = {
            type: actions.NUMBER_PICKED,
            number: 0
        }

        var rec = Object.assign(initialState, {})
        rec.subTotal = 0

        expect(calculator(initialState, a)).toEqual(rec)
    })

    it('should equal picker', () => {
        const expectAction = {
            type: actions.EQUAL_PICKED
        }

        expect(expectAction).toEqual({
            type: actions.EQUAL_PICKED
        })
    })

    it('should equal picker with plus', () => {
        const a = {
            type: actions.EQUAL_PICKED
        }

        var state = {
            sign: "a",
            total: 0,
            subTotal: 0,
            clearStyle: 'Button-Clear',
            emptyStyle: 'Button-Empty',
            operStyle: 'Button-Operation',
            numbStyle: 'Button-Number',
            bLayout: ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','='],
            displayBox: false,
            onceDisplayed: 0,
            history: [],
            displaySign: ''
        }

        var item = "0+0=0"
        
        var rec = Object.assign(initialState, {})
        rec.total = 0
        rec.subTotal = 0
        rec.sign = 'e'
        rec.history = state.history.concat(item)
        
        expect(calculator(state, a)).toEqual(rec)
    })

    it('should equal picker with subtract', () => {
        const a = {
            type: actions.EQUAL_PICKED
        }

        var state = {
            sign: "s",
            total: 0,
            subTotal: 0,
            clearStyle: 'Button-Clear',
            emptyStyle: 'Button-Empty',
            operStyle: 'Button-Operation',
            numbStyle: 'Button-Number',
            bLayout: ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','='],
            displayBox: false,
            onceDisplayed: 0,
            history: [],
            displaySign: ''
        }

        var item = "0\u22120=0"
        
        var rec = Object.assign(initialState, {})
        rec.total = 0
        rec.subTotal = 0
        rec.sign = 'e'
        rec.history = state.history.concat(item)
        
        expect(calculator(state, a)).toEqual(rec)
    })

    it('should equal picker with divide', () => {
        const a = {
            type: actions.EQUAL_PICKED
        }

        var state = {
            sign: "d",
            total: 10,
            subTotal: 5,
            clearStyle: 'Button-Clear',
            emptyStyle: 'Button-Empty',
            operStyle: 'Button-Operation',
            numbStyle: 'Button-Number',
            bLayout: ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','='],
            displayBox: false,
            onceDisplayed: 0,
            history: [],
            displaySign: ''
        }

        var item = "10\xF75=0.5"
        
        var rec = Object.assign(initialState, {})
        rec.total = 0.5
        rec.subTotal = 0
        rec.sign = 'e'
        rec.history = state.history.concat(item)
        
        expect(calculator(state, a)).toEqual(rec)
    })

    it('should equal picker with time', () => {
        const a = {
            type: actions.EQUAL_PICKED
        }

        var state = {
            sign: "m",
            total: 10,
            subTotal: 5,
            clearStyle: 'Button-Clear',
            emptyStyle: 'Button-Empty',
            operStyle: 'Button-Operation',
            numbStyle: 'Button-Number',
            bLayout: ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','='],
            displayBox: false,
            onceDisplayed: 0,
            history: [],
            displaySign: ''
        }

        var item = "10*5=50"
        
        var rec = Object.assign(initialState, {})
        rec.total = 50
        rec.subTotal = 0
        rec.sign = 'e'
        rec.history = state.history.concat(item)
        
        expect(calculator(state, a)).toEqual(rec)
    })

    it('should equal picker with no sign', () => {
        const a = {
            type: actions.EQUAL_PICKED
        }

        var state = {
            sign: "",
            total: 0,
            subTotal: 0,
            clearStyle: 'Button-Clear',
            emptyStyle: 'Button-Empty',
            operStyle: 'Button-Operation',
            numbStyle: 'Button-Number',
            bLayout: ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','='],
            displayBox: false,
            onceDisplayed: 0,
            history: [],
            displaySign: ''
        }

        
        expect(calculator(state, a)).toEqual("")
    })

    it('should display', () => {
        var a = {
            type: actions.DISPLAY_BOX
        }

        var state = {
            sign: "",
            total: 0,
            subTotal: 0,
            clearStyle: 'Button-Clear',
            emptyStyle: 'Button-Empty',
            operStyle: 'Button-Operation',
            numbStyle: 'Button-Number',
            bLayout: ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','='],
            displayBox: false,
            onceDisplayed: 0,
            history: [],
            displaySign: ''
        }

        var initialState = {
            sign: "",
            total: 0,
            subTotal: 0,
            clearStyle: 'Button-Clear',
            emptyStyle: 'Button-Empty',
            operStyle: 'Button-Operation',
            numbStyle: 'Button-Number',
            bLayout: ['c','e','*','\xF7','7','8','9','\u2212','4','5','6','+','1','2','3','='],
            displayBox: true,
            onceDisplayed: 0,
            history: [],
            displaySign: ''
        }

        expect(calculator(state, a)).toEqual(initialState)
    })
})