/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import {render} from '@testing-library/react'
import DisplayResultButton from './DisplayResultButton'

it('render without crashing', () => {
    const displayResultButton = render(<DisplayResultButton />)
    expect(displayResultButton).toBeTruthy()
})