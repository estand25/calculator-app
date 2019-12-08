/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import {render} from '@testing-library/react'
import DisplayMain from './DisplayMain'
import * as redux from 'react-redux'

it('render without crashing', () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({ total: 0, subTotal: 0})
    const displayMain = render(<DisplayMain />)
    expect(displayMain).toBeTruthy()
})