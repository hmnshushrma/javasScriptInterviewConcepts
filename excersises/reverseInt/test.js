const reverseInt = require('./reverseInt')

test('reverse int to be defined', () => {
    expect(reverseInt).toBeDefined()
})


test('reverse int to be true', () => {
    expect(reverseInt(901)).toEqual(109)
})

test('reverse int to be negative', () => {
    expect(reverseInt(-54)).toEqual(-45)
})

test('reverse int to be negative 0', () => {
    expect(reverseInt(-0)).toEqual(-0)
})