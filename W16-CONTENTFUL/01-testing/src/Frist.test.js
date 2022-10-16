import {add, multiply} from './App'

test('Testing add function', () => {

    const result = add(1, 1)
    console.log("🚀 ~ result", result)

    // assert
    expect(result).toBe(2)
    expect(add(2, 3)).toBe(5)
    expect(add(3)).toBe('Error')
})

test('Testing multiply', () => {

    const result = multiply(2, 5)

    expect(result).toBe(10)

})