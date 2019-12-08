/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { actions } from '../actions/type'
import {calculator} from './index'

describe('reducer', () => {
    it('should return the initial state', () => {
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

    it('should set operation picker divid', () => {
        const d = {
            type: actions.OPER_PICKED,
            sign: 'd'
        }
        expect(d).toEqual({
            type: actions.OPER_PICKED,
            sign: 'd'
        })
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

    it('should equal picker', () => {
        const expectAction = {
            type: actions.EQUAL_PICKED
        }

        expect(expectAction).toEqual({
            type: actions.EQUAL_PICKED
        })
    })
})