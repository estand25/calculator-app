/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import {render} from '@testing-library/react'
import DisplayRow from './DisplayRow'
import { reduce } from '../../reducers'
import * as redux from 'react-redux'

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
    let store,wrapper
    
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