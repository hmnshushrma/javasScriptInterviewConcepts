const palindrome = require('./palindrome')
test('palindrome function exixts', () => {
    expect(palindrome).toBeDefined()
})
test('palindrome should be true', () => {
    expect(palindrome('abba')).toBeTruthy()
})


test('palindrome should be false', () => {
    expect(palindrome('abfdba')).toBeFalsy()
})