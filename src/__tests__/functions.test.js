const {sum,sayHello,returnSomeObject,returnsTrue,returnsArray} = require('../functions')


test('adds 1 and 2 together to equal 3', ()=>{
    expect(sum(1,2)).not.toBeNaN()
    expect(sum(1,2)).toBe(3)
})

test('sayHello method says hello',()=>{
    expect(sayHello()).toBe('hello')
})

test('Object assignment works properly',()=>{
    // const data = {one: 1}
    // data['two'] = 2
    expect(returnSomeObject()).toEqual({one: 1,two: 2})
})

test('expects the resutls of returnsTrue to be truthy',()=>{
    expect(returnsTrue()).toBeTruthy()
})

test('returns array function returns an array containing the name Ariel and not Preston',()=>{
    expect(returnsArray()).toContain('Ariel')
    expect(returnsArray()).not.toContain('Preston')
})