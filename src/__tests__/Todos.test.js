import React from 'react'
import {render,act} from '@testing-library/react'
import axios from 'axios'
import Todos from '../components/Todos'

it('Renders todos',async ()=>{
    let component = null
    jest.spyOn(axios,'get').mockImplementation(()=>{
        return Promise.resolve({
            data: [{id: 1,title: 'test title'}]
        })
    })

    await act(async ()=>{
        const {container} = render(<Todos />)
        component = container
    })
    expect(component.textContent).toContain('test title')
})