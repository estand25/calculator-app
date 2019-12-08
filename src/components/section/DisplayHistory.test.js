/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {render} from '@testing-library/react'
import DisplayHistory from './DisplayHistory'
import * as redux from 'react-redux'

it('render without crashing', () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({ history: 'undefined' })
    const displayHistory = render(<DisplayHistory />)
    expect(displayHistory).toBeTruthy()
})

it('render with history item', () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({ history: '9*9=81' })
    const displayHistory = render(<DisplayHistory />)
    expect(displayHistory).toBeTruthy()
})