/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import {render} from '@testing-library/react'
import DisplayButtons from './DisplayButtons'

it('render without crashing', () => {
    const displayButtons = render(<DisplayButtons />)
    expect(displayButtons).toBeTruthy()
})