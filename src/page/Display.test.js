/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import {render} from '@testing-library/react'
import Display from './Display'
import * as redux from 'react-redux'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Disply...', () => {
    const initialState = { 
        layOut: undefined, 
        clearStyle: 'Button-Clear',
        emptyStyle: 'Button-Empty',
        operStyle: 'Button-Operation',
        numbStyle: 'Button-Number',
        total: 0, 
        subTotal: 0,
        history: 'undefined'
    }

    const mockStore = configureStore()
    let store
    it('render without crashing', () => {
        store = mockStore(initialState)
        const display = render(
            <Provider store={store}>
                <Display />
            </Provider>
        )
        expect(display).toBeTruthy()
    })
})