const maxChars = require('./maxChars')

test('maxChars fucntion to be defined', () => {
    expect(maxChars).toBeDefined()
})

test('expectes the result to be true for the provided input', () => {
    expect(maxChars('himanshu')).toEqual('h')
})


test('expectes the result to be true for the provided input', () => {
    expect(maxChars('abbachdnr111rrrghcjkh11hghgf11111kjhkjh1')).toEqual("1")
})