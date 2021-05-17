import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import Header from '../components/Header'

it('does not show dropdown when component mounts',()=>{
    // const response = render(<Header />)
    // console.log(response)  //this console logged all of the methods that are returned by the render method when invoked on a component (Header in this instance)
    const {queryByTestId} = render(<Header />)
    const dropdown = queryByTestId('dropdown')
    expect(dropdown).not.toBeTruthy()
})

it('Shows dropdown when hamburger is clicked',()=>{
    const {container,queryByTestId} = render(<Header />)
    const hamburger = queryByTestId
    ('hamburger-button')
    fireEvent.click(hamburger)
    expect(container.textContent).toContain('Dropdown menu')
})