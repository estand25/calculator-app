/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import {render} from '@testing-library/react'
import DisplayRow from './DisplayRow'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('', () => {
    const initialState = { 
        layOut: undefined, 
        clearStyle: 'Button-Clear',
        emptyStyle: 'Button-Empty',
        operStyle: 'Button-Operation',
        numbStyle: 'Button-Number',
    }
    const mockStore = configureStore()
    let store
    
    it('render without crashing', () => {
        store = mockStore(initialState)
        const displayRow = render(
            <Provider store={store}>
                <DisplayRow />
            </Provider>
        )
        expect(displayRow).toBeTruthy()
    })

})


describe('With output logs', () => {
    const initialState = { 
        layOut: '', 
        clearStyle: 'Button-Clear',
        emptyStyle: 'Button-Empty',
        operStyle: 'Button-Operation',
        numbStyle: 'Button-Number',
    }
    const mockStore = configureStore()
    let store
    
    it('render without crashing', () => {
        store = mockStore(initialState)
        const displayRow = render(
            <Provider store={store}>
                <DisplayRow />
            </Provider>
        )
        expect(displayRow).toBeTruthy()
    })

})